import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('assets')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Welcome to Asset Management Service';
  }


   @Get('policy/:id')
  async getPolicy(@Param('id', ParseIntPipe) policyId: number) {
    return this.appService.getPolicyFromInsurance(policyId);
  }

  @Get('policies')
  async getAllPolicies() {
    return this.appService.getAllPoliciesFromInsurance();
  }

  //get polcy directly without using gateway
   @Get('direct/policy/:id')
  async getDirectPolicy(@Param('id', ParseIntPipe) policyId: number) {
    return this.appService.getPolicyDirectly(policyId);
  }


}
