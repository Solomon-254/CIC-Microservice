import { Controller, Get, Post, Body, ParseIntPipe,Param,Delete,Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Policy } from './entities/policy.entity';
import {PolicyDto } from './dto/create-policy.dto';
import { UpdatePolicyDto } from './dto/update-policy.dto';

@Controller('policies')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post()
  async createPolicy(@Body() dto: PolicyDto): Promise<Policy> {
    return this.appService.createPolicy(dto);
  }

  @Get()
  async findAllPolicies(): Promise<Policy[]> {
    return this.appService.findAllPolicies();
  } 

  @Get(':id')
  async findPolicyById(@Param('id', ParseIntPipe) id: number): Promise<Policy> {
    return this.appService.findPolicyById(id);
  }

  @Put(':id')
  async updatePolicy(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePolicyDto,
  ): Promise<Policy> {
    return this.appService.updatePolicy(id, dto);
  }

  @Delete(':id')
  async deletePolicy(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    await this.appService.deletePolicy(id);
    return { message: `Policy with ID ${id} deleted successfully` };
  }
}
 