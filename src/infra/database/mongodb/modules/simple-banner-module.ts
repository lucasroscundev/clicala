import { MongooseModule } from "@nestjs/mongoose";
import { SimpleBanner, SimpleBannerSchema } from "../schemas/simple-links-schema";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: SimpleBanner.name, schema: SimpleBannerSchema 
    }]),
  ],
  controllers: [],
  providers: [],
})
export class SimpleBannerModule {}