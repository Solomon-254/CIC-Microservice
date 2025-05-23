import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubarrayController } from './subarray.controller';
import { SubarrayService } from './subarray.service';
import { HttpModule } from '@nestjs/axios';
import { MetricsController } from './metrics/metrics.controller';
import { MetricsService } from './metrics/metrics.service';
@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),],
  controllers: [AppController, SubarrayController,MetricsController],
  providers: [AppService, SubarrayService, MetricsService],
})
export class AppModule { }
