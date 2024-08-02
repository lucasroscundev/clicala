// import ...

import { MongooseModule } from "@nestjs/mongoose";
import { Link, LinkSchema } from "../schemas/links-schema";
import { LinksService } from "../service/link-service";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Link.name, schema: LinkSchema }]),
  ],
  controllers: [LinksController],
  providers: [LinksService],
})
export class LinkModule {}