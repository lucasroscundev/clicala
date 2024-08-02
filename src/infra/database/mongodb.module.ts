import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LinkModule } from './mongodb/modules/link.module';
import { LinksService } from './mongodb/service/link-service';
import { LinkModel } from './mongodb/schemas/links-schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }), // Adiciona o ConfigModule
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const uri = configService.get<string>('MONGO_URI');
        const dbName = configService.get<string>('MONGODB_NAME');
        return {
          uri: `${uri}/${dbName}`,
          user: configService.get<string>('MONGO_USER'),
          pass: configService.get<string>('MONGO_PASS'),
          useNewUrlParser: true,
          useUnifiedTopology: true,
        };
      },
    }),
    LinkModule,    
  ],
  providers: [LinksService, ],
  exports:[LinksService, ],
})
export class MongoDbModule {}
