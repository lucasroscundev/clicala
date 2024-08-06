import { MongooseModule } from "@nestjs/mongoose";
//Schema simplificado
import { SimpleBanner, SimpleBannerSchema, SimpleButton, SimpleButtonSchema, SimpleCardLink, SimpleCardLinkSchema, SimpleCarousel, SimpleCarouselImage, SimpleCarouselImageSchema, SimpleCarouselSchema, SimpleGroupCard, SimpleGroupCardSchema, SimpleGroupCardsLink, SimpleGroupCardsLinkSchema, SimpleLink, SimpleLinkSchema } from "../schemas/simple-links-schema";
import { Module } from "@nestjs/common";
import { SimpleLinksService } from "../services/simple-link-service";
import { CreateSimpleLinkController } from "@/infra/http/controllers/create-simple-link.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SimpleLink.name, schema: SimpleLinkSchema },
      { name: SimpleBanner.name, schema: SimpleBannerSchema },
      { name: SimpleButton.name, schema: SimpleButtonSchema },
      { name: SimpleCardLink.name, schema: SimpleCardLinkSchema },
      { name: SimpleCarouselImage.name, schema: SimpleCarouselImageSchema },
      { name: SimpleCarousel.name, schema: SimpleCarouselSchema },
      { name: SimpleGroupCard.name, schema: SimpleGroupCardSchema},
      { name: SimpleGroupCardsLink.name, schema: SimpleGroupCardsLinkSchema},
    ]),
  ],
  controllers: [CreateSimpleLinkController],
  providers: [SimpleLinksService],
  exports: [SimpleLinksService],
})
export class SimpleLinkModule {}