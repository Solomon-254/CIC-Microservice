import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import {Policy} from './entities/policy.entity'
@Module({
  imports: [
      ConfigModule.forRoot({ isGlobal: true }), // Loads .env automatically
     HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
     TypeOrmModule.forRoot({
      type: 'mysql', //any sql/nosql databases
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      retryAttempts: 10,
      retryDelay: 3000,
      autoLoadEntities: true, 
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      // ssl: {
      //   rejectUnauthorized: true
      // }
    }),    

    TypeOrmModule.forFeature([Policy]),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
