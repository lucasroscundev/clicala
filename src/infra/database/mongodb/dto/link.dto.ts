
import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { LinkType, GroupCards, BannerDocument, ButtonDocument, CardLinkDocument } from "@/infra/database/mongodb/schemas/links-schema"
import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger"
import {} from 'class-validator'
import { Types } from 'mongoose'


export class LinkDTO {
  @ApiProperty({
    example: '22a18663-9bce-4584-86aa-6cbf5353a8fe',
  })
  id: UniqueEntityID
  
  @ApiProperty({
  example: 'BUTTON',
  })
  type: LinkType
  
  @ApiProperty({
    example: 'path to Facebook Logo',
  })
  logo?: string

  @ApiProperty({
  example: 'Desired label here',
  })
  label?: string

  @ApiProperty({
   example: 'blue or #0000FF',
  })
  color?: string

  @ApiProperty({
    example: 'medium',
  })
  size?: string;

  @ApiProperty({
    example: 'https://productlink.com/path',
  })
   urlToRedirect?: string;

  @ApiProperty({
    example: 'https://imagelink.com/img',
  })
   imageUrl?: string;
    
  @ApiProperty({
   example: {}
  })
  section?: GroupCards;

  @ApiProperty({
   example: {}
  })
    banner?: BannerDocument;

  @ApiProperty({
   example: {}
  })
  button?: ButtonDocument;

  @ApiProperty({
   example: {}
  })
  card?: CardLinkDocument;

  @ApiProperty({
    example: '2012-04-23T18:25:43.511Z',
  })
  createdAt: Date

  @ApiProperty({
    example: '2012-04-23T18:25:43.511Z',
  })
  updatedAt: Date

  
  constructor(_id: UniqueEntityID, type: LinkType, logo: string, label: string, color: string, 
    size: string, urlToRedirect: string, imageUrl: string, url: string, description: string, userId: string, type: LinkType, createdAt: Date, updatedAt: Date)  {
        this.id = _id
        this.type = type
        this.userId = userId
        this.type = type
        this.createdAt = createdAt
        this.updatedAt = updatedAt     
    }
}

export class CreateLinkDTO extends PartialType(LinkDTO) {}

export class NewLinkDTO extends OmitType(LinkDTO, ['updatedAt'] as const) {}

export class UpdateLinkDTO extends PartialType(LinkDTO) {}

