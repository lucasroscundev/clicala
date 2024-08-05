import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
} from "@nestjs/common"
import { z } from "zod"
import { ZodValidationPipe } from "@/infra/http/pipes/zod-validation-pipe"
import { Public } from "@/infra/auth/public"
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger"
import { CreateLinkDTO, NewLinkDTO } from "@/infra/database/mongodb/dto/link.dto"
import { create } from "domain"
import { LinksService } from "@/infra/database/mongodb/services/link-service"

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
    //private createlink: NestCreateLinkUseCase,
    private readonly linksService: LinksService
  ) {}

  @Post()
  @HttpCode(201)
  //@UsePipes(new ZodValidationPipe(createlinkBodySchema))
  @ApiCreatedResponse({ type: NewLinkDTO })
  async handle(@Body() createLinkDto: CreateLinkDTO,
              @Param('userId') userId: string) {
    /*const {      
      type,      
    } = body*/
    const userIdReceived = userId

    const result = await this.linksService.create(createLinkDto, 
      userIdReceived,
      //createdAt: new Date(),
    )  

    return result
  }

}
