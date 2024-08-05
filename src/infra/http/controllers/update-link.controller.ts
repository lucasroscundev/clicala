import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
} from "@nestjs/common"
import { z } from "zod"
import { ZodValidationPipe } from "@/infra/http/pipes/zod-validation-pipe"
import { Public } from "@/infra/auth/public"
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger"
import { LinkDTO, UpdateLinkDTO } from "@/infra/database/mongodb/dto/link.dto"
import { NotAllowedError } from "@/core/errors/errors/not-allowed-error"
import { LinksService } from "@/infra/database/mongodb/services/link-service"


@ApiTags("links")
@Controller("/link/:userId")
@Public()
export class UpdateLinkController {
  constructor(
    //private createlink: NestCreateLinkUseCase,
    private readonly linksService: LinksService
  ) {}

 @Put()
  @HttpCode(200)
  //@UsePipes(new ZodValidationPipe(createlinkBodySchema))
  @ApiCreatedResponse({ type: LinkDTO })
  async handle(@Body() //id: string, 
                updateLinkDto: LinkDTO,
            /*  @Param('userId') userId: string*/
            ) {
    /*const userIdReceived = userId

    const result = await this.linksService.findOne(updateLinkDto._id,
      //createdAt: new Date(),
    )
    
    if(userIdReceived != result?.userId) {
        return new NotAllowedError
    }*/

    const updatedLink = await this.linksService.update(updateLinkDto)

    return updatedLink
  }

}
