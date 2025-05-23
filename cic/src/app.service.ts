import { HttpService } from '@nestjs/axios';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
 
@Injectable()
export class AppService implements OnModuleInit {
  constructor(private readonly httpService: HttpService) {}

  async onModuleInit() {
    const serviceInstance = {
      serviceName: 'asset-management',
      url: 'http://localhost:3001', //service url
    };
    try {
      const response = await lastValueFrom(
        this.httpService.post('http://localhost:3000/register', serviceInstance),
      );
      console.log('Registered with service registry:', response.data);
    } catch (err) {
      console.error('Failed to register:', err.message);
    }
  }



   async getPolicyFromInsurance(policyId: number) {
    try {
      // Call through the API Gateway
      const response = await lastValueFrom(
        this.httpService.get(`http://localhost:3003/proxy/general-insurance/policies/${policyId}`)
      );
      return response.data;
    } catch (error) {
      console.error('Failed to fetch policy:', error.message);
      throw new Error(`Could not fetch policy ${policyId}`);
    }
  }

  // Method to get all policies from General Insurance Service
  async getAllPoliciesFromInsurance() {
    try {
      const response = await lastValueFrom(
        this.httpService.get('http://localhost:3003/proxy/general-insurance/policies')
      );
      return response.data;
    } catch (error) {
      console.error('Failed to fetch policies:', error.message);
      throw error
    }
  }

  async getPolicyDirectly(policyId: number) {
    try {
      // Direct call to the service (not through gateway)
      const response = await lastValueFrom(
        this.httpService.get(`http://localhost:3002/policies/${policyId}`)
      );
      return response.data;
    } catch (error) {
      console.error('Failed to fetch policy directly:', error.message);
      throw new Error(`Could not fetch policy ${policyId}`);
    }
  }

}
