
import { ApiProperty } from "@nestjs/swagger"

export class LoginUserDTO {
 
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

