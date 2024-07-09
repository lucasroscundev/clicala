
import { ApiProperty } from "@nestjs/swagger"
import { z } from "zod"

export class LoginUserDTO {
  @ApiProperty({
    example: 'example@example.com',    
  })
  email: string

  @ApiProperty({
    example: 'John Doe',    
  })
  name: string

  @ApiProperty({
    example: 'JD',
  })
  nickname: string

  @ApiProperty({
    example: 'uma foto de um gato fofo',
  })
  picture: string

  @ApiProperty({
    example: true,
  })
  emailVerified: boolean

  @ApiProperty({
    example: 'John',
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

  constructor(email: string, name: string, nickname: string, picture: string, 
    emailVerified: boolean, givenName: string, familyName: string, isAuthUser: boolean) { 
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

/*
export type LoginUserDTOType = z.infer<typeof LoginUserDTO>*/

