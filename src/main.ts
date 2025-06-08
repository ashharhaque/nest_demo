// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  mongoose.connection.on('connected', () => {
    console.log('connected to MongoDB');
  });

  mongoose.connection.on('error', (err) => {
    console.error('Mongodb error:', err);
  });

  mongoose.connection.on('disconnected', () => {
    console.warn('[MongoDB] ⚠️ Disconnected from MongoDB');
  });

  await app.listen(3000);
  console.log('application is running on port 3000');
}
bootstrap();
