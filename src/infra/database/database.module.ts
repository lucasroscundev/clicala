import { Module } from "@nestjs/common"
import { PrismaService } from "./prisma/prisma.service"
import { UsersRepository } from "@/domain/forum/application/repositories/users-repository"
import { PrismaUsersRepository } from "./prisma/respositories/prisma-users-repository"
import { LinksRepository } from "@/domain/forum/application/repositories/links-repository"
import { PrismaLinksRepository } from "./prisma/respositories/prisma-links-repository"

@Module({
  providers: [
    PrismaService,
    
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
    {
      provide: LinksRepository,
      useClass: PrismaLinksRepository,
    },
  ],
  exports: [
    PrismaService,
    UsersRepository,
    LinksRepository,
  ],
})
export class DataBaseModule {}
