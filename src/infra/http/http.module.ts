import { Module } from "@nestjs/common";
import { DataBaseModule } from "../database/database.module";
import { CryptographyModule } from "../cryptography/cryptography.module";
import { LoginUserController } from "./controllers/user-login.controller";
import { NestLoginUserUseCase } from "../representations/nest-user-login-use-case";
import { CreateLinkController } from "./controllers/create-link.controller";
import { MongoDbModule } from "../database/mongodb.module";
import { LinksService } from "../database/mongodb/service/link-service";
import { FindLinkByIdController } from "./controllers/find-link-by-id.controller";
import { UpdateLinkController } from "./controllers/update-link.controller";
import { LinkModule } from "../database/mongodb/modules/link.module";
import { LinkModel } from "../database/mongodb/schemas/links-schema";

@Module({
  imports: [DataBaseModule, CryptographyModule, MongoDbModule],
  controllers: [
    LoginUserController,
    CreateLinkController,
    FindLinkByIdController,
    UpdateLinkController,
    ],
  providers: [
    NestLoginUserUseCase,    
    LinksService,
    //LinkModel,
  ],
})
export class HttpModule {}
