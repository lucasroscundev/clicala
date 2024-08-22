import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";
import { LinksType } from "../schemas/types";
import { IsBoolean, IsEmail } from "class-validator";

export class UserDTO {
  @ApiProperty({
  example: 'John Doe XXX',    
  })
  name: string
  
  @ApiProperty({
    example: 'example@example.com',    
  })
  @IsEmail()  
  email: string
  
  @ApiProperty({
    example: 'JayD',
  })
  nickname: string

  @ApiProperty({
    example: 'uma foto do garfield',
  })
  picture: string

  @ApiProperty({
    example: true,
  })
  @IsBoolean()
  emailVerified: boolean

  @ApiProperty({
    example: 'John T.',
  })
  givenName: string

  @ApiProperty({
    example: 'Doe',
  })
  familyName: string

  @ApiProperty({
    example: true,
  })
  isAuthUser: boolean

  @ApiProperty({
    example: "3d7fc2f7-2405-4c40-b924-b4345212dbf0"
  })
  links: string[]

  constructor(email: string, name: string, nickname: string, 
    picture: string, emailVerified: boolean, givenName: string, 
    familyName: string, isAuthUser: boolean, links: string[]) {
    this.email = email
    this.name = name
    this.nickname = nickname
    this.picture = picture
    this.emailVerified = emailVerified
    this.givenName = givenName
    this.familyName = familyName
    this.isAuthUser = isAuthUser
    this.links = links

  }
}

export class LoginUserDTO extends OmitType(UserDTO, ['links'] as const) {}

export class UpdateUserDTO extends PartialType(UserDTO) {}