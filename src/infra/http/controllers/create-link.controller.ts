import {
  Body,
  Controller,
  HttpCode,
  Param,
  Post,
  UsePipes,
} from "@nestjs/common"
import { z } from "zod"
import { ZodValidationPipe } from "@/infra/http/pipes/zod-validation-pipe"
import { Public } from "@/infra/auth/public"
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger"
import { CreateLinkDTO, NewLinkDTO } from "../dto/create-link.dto"

const createlinkBodySchema = z.object({
  type: z.string(),  
  userId: z.string(),  
})

type LoginUserBodySchema = z.infer<typeof createlinkBodySchema>

@ApiTags("links")
@Controller("/link/:userId")
@Public()
export class CreateLinkController {
  constructor(
    private createlink: NestCreateLinkUseCase,

  ) {}

  @Post()
  @HttpCode(201)
  //@UsePipes(new ZodValidationPipe(createlinkBodySchema))
  @ApiCreatedResponse({ type: NewLinkDTO })
  async handle(@Body() body: CreateLinkDTO,
              @Param('userId') userId: string) {
    const {      
      type,      
    } = body
    const userIdReceived = userId

    const result = await this.createlink.execute({
      userId: userIdReceived,
      type,      
      createdAt: new Date(),
    })  

    return result
  }
}
