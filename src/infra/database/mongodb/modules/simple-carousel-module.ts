import { MongooseModule } from "@nestjs/mongoose";
import { SimpleCarousel, SimpleCarouselSchema } from "../schemas/simple-links-schema";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: SimpleCarousel.name, schema: SimpleCarouselSchema 
    }]),
  ],
  controllers: [],
  providers: [],
})
export class SimpleCarouselModule {}