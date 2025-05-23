import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceRegistryController } from './service-registry.controller';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),],
  controllers: [AppController,ServiceRegistryController],
  providers: [AppService],
})
export class AppModule {}
