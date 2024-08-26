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
import { Public } from "@/infra/auth/public"
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger"
import { LoginUserDTO, UpdateUserDTO, UserDTO } from "@/infra/database/mongodb/dto/userdto"
import { UsersService } from "@/infra/database/mongodb/services/user-service"


@ApiTags("mongousers")
@Controller("/mongousers/") //incluir :userId no caminho
@Public()
export class LoginUserController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({ type: UserDTO })
  
  async create(@Body() loginUserDto: LoginUserDTO,
    ) {
    const result = await this.usersService.create(loginUserDto) 

    return result
  }
/*
  @Get()
  @HttpCode(200)
  @ApiCreatedResponse({ type: [UserDTO]})
  async findAll() {
    return this.usersService.findAll()
  }
*/
  @Get(':id')
  @HttpCode(200)
  @ApiCreatedResponse({ type: UserDTO })
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put()
  @HttpCode(201)
  @ApiCreatedResponse({ type: UserDTO })
  async update( @Body() body: UpdateUserDTO
) {
     
     const updatedLink = await this.usersService.update( body )
    return updatedLink
  }

  @Delete(':id')
  @HttpCode(201)
  @ApiCreatedResponse({ type: "The user with id ${id} was deleted." })
  async remove(@Param('id') id: string) {
    await this.usersService.remove(id)
    return `The user with id ${id} was deleted.`
  }

}
