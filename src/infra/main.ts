import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { EnvService } from './env/env.service'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false,
  })

  const envService = app.get(EnvService)
  // alternative: const configService = app.get<ConfigService<Env>>(ConfigService)
  const port = envService.get('PORT')

  const config = new DocumentBuilder()
  .setTitle('Clicalá')
  .setDescription('Clicalá API description')
  .setVersion('0.1')
  .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(port)

}

bootstrap()
