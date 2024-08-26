import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";
import { LinksType } from "../schemas/types";
import { IsAlphanumeric, IsBoolean, IsEmail, IsString } from "class-validator";

export class UserDTO {
  @ApiProperty({
  example: 'John Doe XXX',    
  })
  @IsString()
  name: string
  
  @ApiProperty({
    example: 'example@example.com',    
  })
  @IsEmail()  
  email: string
  
  @ApiProperty({
    example: 'JayD',
  })
  @IsAlphanumeric()
  nickname: string

  @ApiProperty({
    example: 'uma foto do garfield',
  })
  @IsString()
  picture: string

  @ApiProperty({
    example: true,
  })
  @IsBoolean()
  emailVerified: boolean

  @ApiProperty({
    example: 'John T.',
  })
  @IsString()
  givenName: string

  @ApiProperty({
    example: 'Doe',
  })
  @IsString()
  familyName: string

  @ApiProperty({
    example: true,
  })
  @IsBoolean()
  isAuthUser: boolean


  constructor(email: string, name: string, nickname: string, 
    picture: string, emailVerified: boolean, givenName: string, 
    familyName: string, isAuthUser: boolean, ) {
    this.email = email
    this.name = name
    this.nickname = nickname
    this.picture = picture
    this.emailVerified = emailVerified
    this.givenName = givenName
    this.familyName = familyName
    this.isAuthUser = isAuthUser
  }
}

export class LoginUserDTO extends UserDTO {}

export class UpdateUserDTO extends PartialType(UserDTO) {}