import { MongooseModule } from "@nestjs/mongoose";
import { SimpleGroupCardsLink, SimpleGroupCardsLinkSchema } from "../schemas/simple-links-schema";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: SimpleGroupCardsLink.name , schema: SimpleGroupCardsLinkSchema 
    }]),
  ],
  controllers: [],
  providers: [],
})
export class SimpleGroupCardsLinkModule {}
