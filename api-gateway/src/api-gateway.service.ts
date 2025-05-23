import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ApiGatewayService {
  private cache = new Map<string, string[]>();

  constructor(private httpService: HttpService) {}

  async getServiceUrls(name: string): Promise<string[]> {
    if (this.cache.has(name)) {
      return this.cache.get(name);
    }
    const response = await lastValueFrom(
      this.httpService.get(`http://localhost:3000/services/${name}`),
    );
    console.log(response.data, 'From registry')
    const urls = response.data.map(inst => inst.url);
    this.cache.set(name, urls);
    return urls;
  }

  async getRandomUrl(name: string): Promise<string> {
    console.log("Service name", name)
    const urls = await this.getServiceUrls(name);
    console.log("Url length", urls)
    if (!urls.length) throw new Error('Service not found');
    return urls[Math.floor(Math.random() * urls.length)];
  }
} 
 