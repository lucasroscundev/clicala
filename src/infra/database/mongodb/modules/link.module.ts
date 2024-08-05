// import ...

import { MongooseModule } from "@nestjs/mongoose";
//Schema simplificado
//Schema inicial
import { Link, LinkModel, LinkSchema } from "../schemas/links-schema";
import { LinksService } from "../services/link-service";
import { Module } from "@nestjs/common";
import { CreateLinkController } from "@/infra/http/controllers/create-link.controller";
import { FindLinkByIdController } from "@/infra/http/controllers/find-link-by-id.controller";
import { UpdateLinkController } from "@/infra/http/controllers/update-link.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: Link.name, schema: LinkSchema 
    }]),
  ],
  controllers: [CreateLinkController, FindLinkByIdController, UpdateLinkController],
  providers: [LinksService],
})
export class LinkModule {}