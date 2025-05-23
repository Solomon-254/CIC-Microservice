import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';


@Module({
  imports: [ HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),], 
  controllers: [AppController, ApiGatewayController],
  providers: [AppService, ApiGatewayService], 
}) 
export class AppModule {}
