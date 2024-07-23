import {
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
} from "@nestjs/common"
import { z } from "zod"
import { ZodValidationPipe } from "@/infra/http/pipes/zod-validation-pipe"
import { Public } from "@/infra/auth/public"
import { NestLoginUserUseCase } from "@/infra/representations/nest-user-login-use-case"
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger"
import { LoginUserDTO, UserDTO } from "../dto/login-user.dto"

const loginUserBodySchema = z.object({
  email: z.string().email().min(1, "email obrigatório"),
  name: z.string(),
  nickname: z.string(),
  picture: z.string(),
  emailVerified: z.boolean(),
  givenName: z.string(),
  familyName: z.string(),
  isAuthUser: z.boolean(),
})

type LoginUserBodySchema = z.infer<typeof loginUserBodySchema>

@ApiTags("users")
@Controller("/users")
@Public()
export class LoginUserController {
  constructor(
    private loginUser: NestLoginUserUseCase,

  ) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(loginUserBodySchema))
  @ApiCreatedResponse({ type: LoginUserDTO })
  async handle(@Body() body: LoginUserDTO) {
    const {
      email,
      name,
      nickname,
      picture,
      emailVerified,
      givenName,
      familyName,
      isAuthUser,
    } = body

    const result = await this.loginUser.execute({
      email,
      name,
      nickname,
      picture,
      emailVerified,
      givenName,
      familyName,
      isAuthUser,
      createdAt: new Date(),
    })  

    return result
  }
}
