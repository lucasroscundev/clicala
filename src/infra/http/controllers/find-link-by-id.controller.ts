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
import { LinkDTO } from "@/infra/database/mongodb/dto/link.dto"
import { create } from "domain"
import { NotAllowedError } from "@/core/errors/errors/not-allowed-error"
import { LinksService } from "@/infra/database/mongodb/services/link-service"

const createlinkBodySchema = z.object({
  type: z.string(),  
  userId: z.string(),  
})

type LoginUserBodySchema = z.infer<typeof createlinkBodySchema>

@ApiTags("links")
@Controller("/link/:userId")
@Public()
export class FindLinkByIdController {
  constructor(
    //private createlink: NestCreateLinkUseCase,
    private readonly linksService: LinksService
  ) {}

 @Get()
  @HttpCode(200)
  //@UsePipes(new ZodValidationPipe(createlinkBodySchema))
  @ApiCreatedResponse({ type: LinkDTO })
  async handle(@Body() id: string,
              @Param('userId') userId: string) {
    const userIdReceived = userId

    const result = await this.linksService.findOne(id,
      //createdAt: new Date(),
    )
    
   /* if(userIdReceived != result?.userId) {
        return new NotAllowedError
    }*/

    return result
  }

}
