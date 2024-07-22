import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomSocketIoAdapter } from "./socket.io.adaptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new CustomSocketIoAdapter(app));
  await app.listen(3003);
}
bootstrap();
