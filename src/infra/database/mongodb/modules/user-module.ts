import { MongooseModule } from "@nestjs/mongoose";
//Schema simplificado
import { SimpleBanner, SimpleBannerSchema, SimpleButton, SimpleButtonSchema, SimpleCardLink, SimpleCardLinkSchema, SimpleCarousel, SimpleCarouselImage, SimpleCarouselImageSchema, SimpleCarouselSchema, SimpleGroupCard, SimpleGroupCardSchema, SimpleGroupCardsLink, SimpleGroupCardsLinkSchema, SimpleLink, SimpleLinkSchema, User, UserSchema } from "../schemas/simple-links-schema";
import { Module } from "@nestjs/common";
import { SimpleLinksService } from "../services/simple-link-service";
import { CreateSimpleLinkController } from "@/infra/http/controllers/create-simple-link.controller";
import { UsersService } from "../services/user-service";
import { LoginUserController } from "@/infra/http/controllers/mongo-user-login-controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [LoginUserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UserModule {}