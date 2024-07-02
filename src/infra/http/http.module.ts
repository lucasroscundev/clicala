import { Module } from "@nestjs/common";
import { DataBaseModule } from "../database/database.module";
import { CryptographyModule } from "../cryptography/cryptography.module";
import { LoginUserController } from "./controllers/user-login.controller";
import { NestLoginUserUseCase } from "../representations/nest-user-login-use-case";

@Module({
  imports: [DataBaseModule, CryptographyModule],
  controllers: [
    LoginUserController
    ],
  providers: [
    NestLoginUserUseCase,
  ],
})
export class HttpModule {}
