
import { LinkType, GroupCards, BannerDocument, ButtonDocument, CardLinkDocument, CarouselImageDocument, CarouselDocument } from "@/infra/database/mongodb/schemas/links-schema"
import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger"
import {} from 'class-validator'


export class LinkDTO {
  @ApiProperty({
    example: '22a18663-9bce-4584-86aa-6cbf5353a8fe',
  })
  _id: string
  
  @ApiProperty({
  example: 'BUTTON',
  })
  type: LinkType

  @ApiProperty({
  example: '22a18663-9bce-4584-86aa-6cbf5353a8fe',
  })
  userId: string
  
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
    banner?: BannerDocument;

  @ApiProperty({
   example: {}
  })
  button?: ButtonDocument;

  @ApiProperty({
   example: {}
  })
  cards?: CardLinkDocument[];

  @ApiProperty({
    example: {}
  })
    groupCards?: GroupCards; 

  @ApiProperty({
    example: {}
  })  
    carousel?: CarouselDocument; 

   @ApiProperty({
   example: {}
  })
  images?: CarouselImageDocument[];

  @ApiProperty({
    example: '2012-04-23T18:25:43.511Z',
  })
  createdAt: Date

  @ApiProperty({
    example: '2012-04-23T18:25:43.511Z',
  })
  updatedAt: Date

  
  constructor(_id: string, type: LinkType, logo: string, label: string, 
    color: string, size: string, urlToRedirect: string, imageUrl: string, 
    userId: string, createdAt: Date, updatedAt: Date)  {
        this._id = _id
        this.type = type
        this.logo = logo
        this.label = label
        this.color = color
        this.size = size
        this.urlToRedirect = urlToRedirect
        this.imageUrl = imageUrl
        this.userId = userId        
        this.createdAt = createdAt
        this.updatedAt = updatedAt     
    }
}

export class CreateLinkDTO extends PartialType(LinkDTO) {}

export class NewLinkDTO extends OmitType(LinkDTO, ['updatedAt'] as const) {}

export class UpdateLinkDTO extends PartialType(LinkDTO) {}

