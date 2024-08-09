import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";
import { SimpleGroupCard } from "../schemas/simple-links-schema";

export class SimpleGroupCardDTO {
  @ApiProperty({
    example: "872c96b8-0990-46bc-b759-a7953893f7d7",
})
  id: string;
  
  @ApiProperty({
    example: "https://back.example.com/amusement.png",
  })  
  imageUrl: string;

  @ApiProperty({
    example: "Back Image",
  })
    buttonLabel: string;

  @ApiProperty({
    example: "#4ab3ac",
  })
    buttonColor: string;
  
  @ApiProperty({
    example:"medium",
  })
    buttonSize: string;
  
  @ApiProperty({
    example: "https://bone.example.net/board/bag.php",
  })
    buttonUrl: string;

  constructor(id: string, imageUrl: string, buttonLabel: string, buttonColor: string, 
   buttonSize: string, buttonUrl: string
  ) {
    this.id = id
    this.imageUrl = imageUrl
    this.buttonLabel = buttonLabel
    this.buttonColor = buttonColor
    this.buttonSize = buttonSize
    this.buttonUrl = buttonUrl
  }
}

export class CreateSimpleGroupCardDTO extends OmitType(SimpleGroupCardDTO, ['id'] as const) {}

export class UpdateSimpleGroupCardDTO extends PartialType(SimpleGroupCardDTO) {}