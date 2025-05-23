import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MetricsService } from './metrics/metrics.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   const metricsService = app.get(MetricsService);

  app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
      const duration = Date.now() - start;
      metricsService.countRequest(req.method, req.originalUrl, res.statusCode);
    });
    next();
  });
  await app.listen(3001);
  

  
}
bootstrap();




