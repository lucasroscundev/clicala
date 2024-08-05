import { Module } from "@nestjs/common";
import { DataBaseModule } from "../database/database.module";
import { CryptographyModule } from "../cryptography/cryptography.module";
import { LoginUserController } from "./controllers/user-login.controller";
import { NestLoginUserUseCase } from "../representations/nest-user-login-use-case";
import { CreateLinkController } from "./controllers/create-link.controller";
import { MongoDbModule } from "../database/mongodb.module";
import { LinksService } from "../database/mongodb/services/link-service";
import { FindLinkByIdController } from "./controllers/find-link-by-id.controller";
import { UpdateLinkController } from "./controllers/update-link.controller";
import { LinkModule } from "../database/mongodb/modules/link.module";
import { LinkModel } from "../database/mongodb/schemas/links-schema";
import { SimpleLinkModule } from "../database/mongodb/modules/simple-link-module";
import { SimpleBannerModule } from "../database/mongodb/modules/simple-banner-module";
import { SimpleButtonModule } from "../database/mongodb/modules/simple-button-module";
import { SimpleCardLinkModule } from "../database/mongodb/modules/simple-card-link-module";
import { SimpleCarouselImageModule } from "../database/mongodb/modules/simple-carousel-image-module";
import { SimpleCarouselModule } from "../database/mongodb/modules/simple-carousel-module";
import { SimpleGroupCardModule } from "../database/mongodb/modules/simple-group-card-module";
import { SimpleGroupCardsLinkModule } from "../database/mongodb/modules/simple-group-cards-link-module";
import { CreateSimpleLinkController } from "./controllers/create-simple-link.controller";
import { SimpleLinksService } from "../database/mongodb/services/simple-link-service";
import { SimpleLink, SimpleLinkModel } from "../database/mongodb/schemas/simple-links-schema";

@Module({
  imports: [DataBaseModule, CryptographyModule, SimpleLinkModule, 
    SimpleBannerModule, SimpleButtonModule, SimpleCardLinkModule,
    SimpleCarouselImageModule, SimpleCarouselModule, SimpleGroupCardModule,
    SimpleGroupCardsLinkModule,
  ],
  controllers: [
    LoginUserController,
    /*CreateLinkController,
    FindLinkByIdController,
    UpdateLinkController,*/
    CreateSimpleLinkController,
    ],
  providers: [
    NestLoginUserUseCase,
    SimpleLinksService,
    SimpleLinkModel,
    ],
})
export class HttpModule {}
