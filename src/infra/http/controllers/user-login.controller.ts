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

const loginUserBodySchema = z.object({
  email: z.string().email(),
  name: z.string(),
  nickname: z.string(),
  picture: z.string(),
  emailVerified: z.boolean(),
  givenName: z.string(),
  familyName: z.string(),
  isAuthUser: z.boolean(),
})

type LoginUserBodySchema = z.infer<typeof loginUserBodySchema>

@Controller("/users")
@Public()
export class LoginUserController {
  constructor(
    private loginUser: NestLoginUserUseCase,

  ) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(loginUserBodySchema))
  async handle(@Body() body: LoginUserBodySchema) {
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
