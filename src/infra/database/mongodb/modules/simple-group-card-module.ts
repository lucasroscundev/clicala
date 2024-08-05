import { MongooseModule } from "@nestjs/mongoose";
import { SimpleGroupCard, SimpleGroupCardSchema } from "../schemas/simple-links-schema";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: SimpleGroupCard.name, schema: SimpleGroupCardSchema 
    }]),
  ],
  controllers: [],
  providers: [],
})
export class SimpleGroupCardModule {}