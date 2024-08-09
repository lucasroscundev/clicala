import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
  UsePipes,
} from "@nestjs/common"
import { z } from "zod"
import { ZodValidationPipe } from "@/infra/http/pipes/zod-validation-pipe"
import { Public } from "@/infra/auth/public"
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger"
import { SimpleLinksService } from "@/infra/database/mongodb/services/simple-link-service"
import { CreateSimpleLinkDTO, SimpleLinkDTO, UpdateSimpleLinkDTO } from "@/infra/database/mongodb/dto/simple-link.dto"


@ApiTags("simplelinks")
@Controller("/simplelink/") //incluir :userId no caminho
@Public()
export class CreateSimpleLinkController {
  constructor(
    private readonly simplelinksService: SimpleLinksService
  ) {}

  @Post()
  @HttpCode(201)
  //@UsePipes(new ZodValidationPipe(createlinkBodySchema))
  @ApiCreatedResponse({ type: SimpleLinkDTO })
  async create(@Body() createLinkDto: CreateSimpleLinkDTO,
    ) {
    const result = await this.simplelinksService.create(createLinkDto) 

    return result
  }

  @Get()
  @HttpCode(200)
  @ApiCreatedResponse({ type: [SimpleLinkDTO]})
  async findAll() {
    return this.simplelinksService.findAll()
  }

  @Get(':id')
  @HttpCode(200)
  @ApiCreatedResponse({ type: SimpleLinkDTO })
  async findOne(@Param('id') id: string) {
    return this.simplelinksService.findOne(id);
  }

  @Put()
  @HttpCode(202)
  @ApiCreatedResponse({ type: SimpleLinkDTO })
  async update(/*@Param('id') id: string,*/ @Body() body: SimpleLinkDTO
//  updateSimpleLinkDTO: UpdateSimpleLinkDTO
) {
    const {
      id,
      orderInpageById,
      banners,
      buttons,
      cards,
      carousels,
      groupCards,
      createdAt,
      updatedAt,

    } = body
     const updatedLink = await this.simplelinksService.update({
      orderInpageById,
      banners,
      buttons,
      cards,
      carousels,
      groupCards,
     })
    return updatedLink
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiCreatedResponse({ type: String })
  async remove(@Param('id') id: string) {
    return this.simplelinksService.remove(id)
  }

}
