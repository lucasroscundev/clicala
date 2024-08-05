import { MongooseModule } from "@nestjs/mongoose";
import { SimpleButton, SimpleButtonSchema } from "../schemas/simple-links-schema";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: SimpleButton.name, schema: SimpleButtonSchema 
    }]),
  ],
  controllers: [],
  providers: [],
})
export class SimpleButtonModule {}