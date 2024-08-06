import { MongooseModule } from "@nestjs/mongoose";
import { SimpleCarouselImage, SimpleCarouselImageSchema } from "../schemas/simple-links-schema";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: SimpleCarouselImage.name , schema: SimpleCarouselImageSchema 
    }]),
  ],
  controllers: [],
  providers: [],
})
export class SimpleCarouselImageModule {}