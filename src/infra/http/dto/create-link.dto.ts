
import { ApiProperty, OmitType } from "@nestjs/swagger"
import { Z } from "vitest/dist/reporters-yx5ZTtEV"
import { z } from "zod"


export class LinkDTO {
  @ApiProperty({
    example: '22a18663-9bce-4584-86aa-6cbf5353a8fe',
  })
  id: string

  @ApiProperty({
    example: 'https://br.freepik.com/fotos-gratis/flores-roxas-em-um-vaso_40070947.htm',    
  })
  
  url: string

  @ApiProperty({
    example: 'John Doe XXX',    
  })
  description: string

  @ApiProperty({
    example: '23k19563-9gta-1934-75fd-6cbf9734a8pn',
  })
  userId: string

  @ApiProperty({
    example: 'button',
  })
  type: string

  @ApiProperty({
    example: 'small',
  })
  size: string  

  constructor(id: string, url: string, description: string, userId: string, type: string, size: string)  {
        this.id = id
        this.url = url
        this.description = description
        this.userId = userId
        this.type = type
        this.size = size        
    }
}

export class CreateLinkDTO extends OmitType(LinkDTO, ['id'] as const) {}

