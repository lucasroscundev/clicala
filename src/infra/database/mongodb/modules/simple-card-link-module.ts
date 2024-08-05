import { MongooseModule } from "@nestjs/mongoose";
import { SimpleCardLink, SimpleCardLinkSchema } from "../schemas/simple-links-schema";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: SimpleCardLink.name, schema: SimpleCardLinkSchema 
    }]),
  ],
  controllers: [],
  providers: [],
})
export class SimpleCardLinkModule {}