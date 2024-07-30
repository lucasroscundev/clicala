import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export interface CardLinkProps {
  linkId: string
  imageUrl: string
  buttonLabel: string
  buttonColor: string
  buttonSize: string
  buttonUrl: string
}

export class CardLink extends Entity<CardLinkProps> {
  get linkId(){
    return this.linkId
  }

  set linkId(linkId: string) {
    this.linkId = linkId
  }

  get imageUrl(){
      return this.imageUrl
  }

  set imageUrl(imageUrl: string) {
    this.imageUrl = imageUrl
  }

  get buttonLabel(){
    return this.buttonLabel
  }

  set buttonLabel(buttonLabel: string) {
    this.buttonLabel = buttonLabel
  }

  get buttonColor(){
    return this.buttonColor
  }

  set buttonColor(buttonColor: string) {
    this.buttonColor = buttonColor
  }

  get buttonSize(){
    return this.buttonSize
  }

  set buttonSize(buttonSize: string) {
    this.buttonSize = buttonSize
  }

  get buttonUrl(){
    return this.buttonUrl
  }

  set buttonUrl(buttonUrl: string) {
    this.buttonUrl = buttonUrl
  }

  static create(
    props: CardLinkProps,
    id?: UniqueEntityID,
    ) {
    const cardLink = new CardLink({
        ...props,

    }, id)
    return cardLink
  }
}