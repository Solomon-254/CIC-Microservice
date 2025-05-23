import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

// Load environment variables
config();

const configService = new ConfigService();

// Export TypeORM DataSource for migrations and runtime
export default new DataSource({
  type: 'mysql',
  host: configService.get<string>('DB_HOST', 'localhost'),
  port: configService.get<number>('DB_PORT', 3306),
  username: configService.get<string>('DB_USERNAME', 'root'),
  password: configService.get<string>('DB_PASSWORD', '8047'),
  database: configService.get<string>('DB_DATABASE', 'cic'),
  entities: ['src/**/*.entity.{ts,js}'],  
  migrations: ['migrations/**/*.{ts,js}'],
  logging: true,
  migrationsRun: true,  
  // ssl: {
  //   rejectUnauthorized: true
  // },
  extra: {
    charset: 'utf8mb4_unicode_ci', // Support emojis & special chars
  },
});
