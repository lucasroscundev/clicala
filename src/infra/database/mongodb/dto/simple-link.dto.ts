import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";
import { SimpleLink } from "../schemas/simple-links-schema";

export class SimpleLinkDTO {
  @ApiProperty()
  id: string
  @ApiProperty({
    example: ['agjhe-237j3k4-34m5ço6=famp706'],
  })
  orderInpageById: string[];

    @ApiProperty({
    example: {
        "id": "string",
        "imageUrl": "https://banners.com/instagram/userXYZ123",
        "urlToRedirect": "https://banners.com/instagram/userXYZ123",            
        "size": "medium",
    }
  })
  banners: string[];

  @ApiProperty({
    example: [{
        "id": "string",
        "label": "string",
        "url": "https://buttons.com/instagram/userXYZ123",
        "color": "#459800",
        "size": "big",
    }]
  })
  buttons: string[];

  @ApiProperty({
    example: [{
        "id": "string",  
        "imageUrl": "https://cards.com/instagram/userXYZ123",
        "buttonLabel": "buttonLabel",
        "buttonColor": "buttonColor",
        "buttonSize": "big",
        "buttonUrl": "https://cards.com/instagram/userXYZ123",
    }]
  })
  cards: string[];

  @ApiProperty({
    example: [{
      "id": "string",
      "images": {
          "id": "string",
          "imageUrl": "string",
          "urlToRedirect": "string",
        }
    }]
  })
  carousels: string[];

  @ApiProperty({
    example: [{
      "id": "string",
      "cards":[{
      "id": "string",          
      "imageUrl": "string",          
      "buttonLabel": "string",          
      "buttonColor": "string",          
      "buttonSize": "string",          
      "buttonUrl": "string",
      },],
    }]
  })
  groupCards: string[];

  @ApiProperty({
    example: {
      "created": "2024-08-06T21:43:27.833Z",
    }
  })
  createdAt: Date

  @ApiProperty({
    example: {
      "updated": "2024-08-06T21:43:27.833Z",
    }    
  })
  updatedAt: Date

  constructor(id: string, orderInpageById: string[], buttons: string[], banners: string[],
    carousels: string[], cards: string[], groupCards: string[],
  createdAt: Date, updatedAt: Date) {
    this.id = id  
    this.orderInpageById = orderInpageById
    this.banners = banners
    this.buttons = buttons
    this.cards = cards
    this.carousels = carousels
    this.groupCards = groupCards
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

export class CreateSimpleLinkDTO extends PartialType(SimpleLinkDTO) {}

export class UpdateSimpleLinkDTO extends OmitType(SimpleLinkDTO, ['id', 'createdAt', 'updatedAt'] as const) {}