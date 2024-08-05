import { Module } from "@nestjs/common"
import { PrismaService } from "./prisma/prisma.service"
import { UsersRepository } from "@/domain/forum/application/repositories/users-repository"
import { PrismaUsersRepository } from "./prisma/respositories/prisma-users-repository"
import { LinksService } from "./mongodb/services/link-service"
import { MongoDbModule } from "./mongodb.module"
import { LinkModel } from "./mongodb/schemas/links-schema"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { MongooseModule } from "@nestjs/mongoose"
/*
import { LinksRepository } from "@/domain/forum/application/repositories/links-repository"
import { PrismaLinksRepository } from "./prisma/respositories/prisma-links-repository"
*/

@Module({
  // imports Added to attemp MongoDB implementation
  imports:[
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
  ],
  providers: [
    PrismaService,    
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },

  ],
  exports: [
    PrismaService,
    UsersRepository,
  ],
})
export class DataBaseModule {}
