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
import { SimpleLinksService } from "@/infra/database/mongodb/services/simple-link-service"
import { CreateSimpleLinkDTO, SimpleLinkDTO } from "@/infra/database/mongodb/dto/simple-link.dto"


@ApiTags("links")
@Controller("/link/:userId")
@Public()
export class CreateSimpleLinkController {
  constructor(
    private readonly simplelinksService: SimpleLinksService
  ) {}

  @Post()
  @HttpCode(201)
  //@UsePipes(new ZodValidationPipe(createlinkBodySchema))
  @ApiCreatedResponse({ type: SimpleLinkDTO })
  async handle(@Body() createLinkDto: CreateSimpleLinkDTO,
    ) {
   

    const result = await this.simplelinksService.create(createLinkDto)  

    return result
  }

}
