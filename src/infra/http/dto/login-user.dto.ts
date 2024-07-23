
import { ApiProperty, OmitType } from "@nestjs/swagger"
import { Z } from "vitest/dist/reporters-yx5ZTtEV"
import { z } from "zod"


export class UserDTO {
  @ApiProperty({
    example: '22a18663-9bce-4584-86aa-6cbf5353a8fe',
  })
  id: string

  @ApiProperty({
    example: 'example@example.com',    
  })
  
  email: string

  @ApiProperty({
    example: 'John Doe XXX',    
  })
  name: string

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

  constructor(id: string, email: string, name: string, nickname: string, picture: string, 
    emailVerified: boolean, givenName: string, familyName: string, isAuthUser: boolean) {
        this.id = id
        this.name = name
        this.email = email
        this.nickname = nickname
        this.picture = picture
        this.emailVerified = emailVerified
        this.givenName = givenName
        this.familyName = familyName
        this.isAuthUser = isAuthUser
    }
}

export class LoginUserDTO extends OmitType(UserDTO, ['id'] as const) {}

