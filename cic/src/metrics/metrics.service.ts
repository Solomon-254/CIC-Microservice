import { Injectable, OnModuleInit } from '@nestjs/common';
import * as client from 'prom-client';

@Injectable()
export class MetricsService implements OnModuleInit {
  private readonly httpRequestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status'],
  });

  onModuleInit() {
    client.collectDefaultMetrics(); // Collect system metrics (memory, CPU, etc.)
  }

  countRequest(method: string, route: string, status: number) {
    this.httpRequestCounter.inc({ method, route, status });
  }

  getMetrics(): Promise<string> {
    return client.register.metrics();
  }
}
