import { Module } from "@nestjs/common"
import { PrismaService } from "./prisma/prisma.service"
import { UsersRepository } from "@/domain/forum/application/repositories/users-repository"
import { PrismaUsersRepository } from "./prisma/respositories/prisma-users-repository"
import { LinksService } from "./mongodb/service/link-service"
import { MongoDbModule } from "./mongodb.module"
import { LinkModel } from "./mongodb/schemas/links-schema"
/*
import { LinksRepository } from "@/domain/forum/application/repositories/links-repository"
import { PrismaLinksRepository } from "./prisma/respositories/prisma-links-repository"
*/

@Module({
  //imports:[MongoDbModule],
  providers: [
    PrismaService,    
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
    //MongoDbModule,
    /*{
      provide: LinksRepository,
      useClass: PrismaLinksRepository,
    },*/
  ],
  exports: [
    PrismaService,
    UsersRepository,
    //LinksRepository,
  ],
})
export class DataBaseModule {}
