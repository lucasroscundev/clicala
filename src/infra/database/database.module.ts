import { Module } from "@nestjs/common"
import { PrismaService } from "./prisma/prisma.service"
import { UsersRepository } from "@/domain/forum/application/repositories/users-repository"
import { PrismaUsersRepository } from "./prisma/respositories/prisma-users-repository"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { MongooseModule } from "@nestjs/mongoose"
import { SimpleLinkModule } from "./mongodb/modules/simple-link-module"
import { UserModule } from "./mongodb/modules/user-module"
/*import { SimpleBannerModule } from "./mongodb/modules/simple-banner-module"
import { SimpleButtonModule } from "./mongodb/modules/simple-button-module"
import { SimpleCardLinkModule } from "./mongodb/modules/simple-card-link-module"
import { SimpleCarouselImageModule } from "./mongodb/modules/simple-carousel-image-module"
import { SimpleCarouselModule } from "./mongodb/modules/simple-carousel-module"
import { SimpleGroupCardModule } from "./mongodb/modules/simple-group-card-module"
import { SimpleGroupCardsLinkModule } from "./mongodb/modules/simple-group-cards-link-module"*/
/*
import { LinksRepository } from "@/domain/forum/application/repositories/links-repository"
import { PrismaLinksRepository } from "./prisma/respositories/prisma-links-repository"
*/

@Module({
  // imports Added to attemp MongoDB implementation
  imports:[
MongooseModule.forRoot('mongodb://localhost:27017/clicala'), 
SimpleLinkModule, UserModule/*SimpleBannerModule, SimpleButtonModule, SimpleCardLinkModule, 
SimpleCarouselImageModule, SimpleCarouselModule, SimpleGroupCardModule, SimpleGroupCardsLinkModule,*/
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
