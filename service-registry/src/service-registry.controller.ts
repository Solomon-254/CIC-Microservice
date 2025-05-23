import { Controller, Post, Get, Body, Param } from '@nestjs/common';

interface ServiceInstance {
  serviceName: string;
  url: string;
  metadata?: any;
} 

@Controller()
export class ServiceRegistryController {
  private registry: Map<string, ServiceInstance[]> = new Map();

  @Post('register')
  register(@Body() instance: ServiceInstance) {
    const { serviceName, url } = instance;
    if (!this.registry.has(serviceName)) {
      this.registry.set(serviceName, []);
    }
    const instances = this.registry.get(serviceName);
    // avoid duplicates
    if (!instances.find(i => i.url === url)) {
      instances.push(instance); 
    }
    return { status: 'registered', instances };
  }

  @Get('services/:serviceName')
  getServiceInstances(@Param('serviceName') serviceName: string) {
    return this.registry.get(serviceName) || [];
  }
}
