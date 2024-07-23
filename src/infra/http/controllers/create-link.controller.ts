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
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger"
import { CreateLinkUseCase } from "@/domain/forum/application/use-cases/create-link"
import { CreateLinkDTO, LinkDTO } from "../dto/create-link.dto"
import { NestCreateLinkUseCase } from "@/infra/representations/nest-create-link-use-case"

const createlinkBodySchema = z.object({
  url: z.string(),
  description: z.string(),
  userId: z.string(),
  type: z.string(),
  size: z.string(),  
})

type LoginUserBodySchema = z.infer<typeof createlinkBodySchema>

@ApiTags("links")
@Controller("/links")
@Public()
export class CreateLinkController {
  constructor(
    private createlink: NestCreateLinkUseCase,

  ) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createlinkBodySchema))
  @ApiCreatedResponse({ type: CreateLinkDTO })
  async handle(@Body() body: CreateLinkDTO) {
    const {
      url,
      description,
      userId,
      type,
      size,
    } = body

    const result = await this.createlink.execute({
      url,
      description,
      userId,
      type,
      size,
      createdAt: new Date(),
    })  

    return result
  }
}
