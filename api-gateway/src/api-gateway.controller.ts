import { Controller, All, Req, Res, Param } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { Request, Response } from 'express';
import axios from 'axios';

@Controller('proxy')
export class ApiGatewayController {
  constructor(private gatewayService: ApiGatewayService) {}

  @All(':serviceName/*')
  async proxy(
    @Param('serviceName') serviceName: string, 
    @Req() req: Request, 
    @Res() res: Response
  ) {
    try {
      const url = await this.gatewayService.getRandomUrl(serviceName);
      console.log(`Base service URL: ${url}`);
        console.log('=== DEBUG INFO ===');
  console.log('Service Name:', serviceName);
  console.log('Original URL:', req.url);
  console.log('Method:', req.method);
  console.log('Params:', req.params);
  console.log('Query:', req.query);
  console.log('Body:', req.body);
  console.log('==================');
      // Get the full path after serviceName
      const fullPath = req.url.split(`/${serviceName}/`)[1] || '';
      const proxyUrl = `${url}/${fullPath}`;
      
      console.log(`Original URL: ${req.url}`);
      console.log(`Proxying to: ${proxyUrl}`);

      // Clean up headers - remove host and other problematic headers
      const cleanHeaders = { ...req.headers };
      delete cleanHeaders.host;
      delete cleanHeaders['content-length'];

      const response = await axios({
        method: req.method as any,
        url: proxyUrl,
        data: req.body,
        headers: cleanHeaders,
        // Add query parameters
        params: req.query,
        // Don't follow redirects automatically
        maxRedirects: 0,
        // Handle different response types
        responseType: 'json',
        validateStatus: () => true, // Don't throw on 4xx/5xx
      });

      console.log(`Response status: ${response.status}`);
      console.log(`Response data:`, response.data);
      
      // Forward all headers from the target service
      Object.entries(response.headers).forEach(([key, value]) => {
        if (key.toLowerCase() !== 'transfer-encoding') {
          res.set(key, value as string);
        }
      });

      res.status(response.status).send(response.data);
    } catch (error) {
      console.error('Proxy error:', error.message);
      if (error.code === 'ECONNREFUSED') {
        res.status(503).send({ 
          error: 'Service Unavailable', 
          message: `Cannot connect to ${serviceName} service` 
        });
      } else {
        res.status(500).send({ 
          error: 'Gateway Error', 
          message: error.message 
        });
      }
    }
  }
}