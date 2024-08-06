import { ApiProperty, PartialType } from "@nestjs/swagger";
import { SimpleLink } from "../schemas/simple-links-schema";

export class SimpleLinkDTO {
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

  constructor(orderInpageById: string[], buttons: string[], banners: string[],
    carousels: string[], cards: string[], groupCards: string[]) {
    this.orderInpageById = orderInpageById
    this.banners = banners
    this.buttons = buttons
    this.cards = cards
    this.carousels = carousels
    this.groupCards = groupCards
  }
}

export class CreateSimpleLinkDTO extends PartialType(SimpleLinkDTO) {}

export class UpdateSimpleLinkDTO extends PartialType(SimpleLinkDTO) {}