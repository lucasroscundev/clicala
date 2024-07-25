
import { LinkType } from "@prisma/client"
import { ApiProperty, OmitType } from "@nestjs/swagger"
import { Z } from "vitest/dist/reporters-yx5ZTtEV"
import { z } from "zod"


export class LinkDTO {
  @ApiProperty({
    example: '22a18663-9bce-4584-86aa-6cbf5353a8fe',
  })
  id: string

  @ApiProperty({
    example: '23k19563-9gta-1934-75fd-6cbf9734a8pn',
  })
  userId: string

  @ApiProperty({
    example: 'BUTTON',
  })
  type: LinkType

  @ApiProperty({
    example: '2012-04-23T18:25:43.511Z',
  })
  createdAt: Date

  @ApiProperty({
    example: '2012-04-23T18:25:43.511Z',
  })
  updatedAt: Date

  constructor(id: string, url: string, description: string, userId: string, type: LinkType, createdAt: Date, updatedAt: Date)  {
        this.id = id
        this.userId = userId
        this.type = type
        this.createdAt = createdAt
        this.updatedAt = updatedAt     
    }
}

export class CreateLinkDTO extends OmitType(LinkDTO, ['id', 'createdAt','updatedAt', 'userId'] as const) {}

export class NewLinkDTO extends OmitType(LinkDTO, ['id', 'updatedAt'] as const) {}

