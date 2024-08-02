import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export interface CardLinkProps {
  imageUrl: string
  buttonLogo: string
  buttonLabel: string
  buttonColor: string
  buttonSize: string
  buttonUrl: string
}

export class CardLink extends Entity<CardLinkProps> {

  get imageUrl(){
      return this.props.imageUrl
  }

  set imageUrl(imageUrl: string) {
    this.props.imageUrl = imageUrl
  }

  get buttonLogo(){
    return this.props.buttonLogo
  }

  set buttonLogo(buttonLogo: string) {
    this.props.buttonLogo = buttonLogo
  }

  get buttonLabel(){
    return this.props.buttonLabel
  }

  set buttonLabel(buttonLabel: string) {
    this.props.buttonLabel = buttonLabel
  }

  get buttonColor(){
    return this.props.buttonColor
  }

  set buttonColor(buttonColor: string) {
    this.props.buttonColor = buttonColor
  }

  get buttonSize(){
    return this.props.buttonSize
  }

  set buttonSize(buttonSize: string) {
    this.props.buttonSize = buttonSize
  }

  get buttonUrl(){
    return this.props.buttonUrl
  }

  set buttonUrl(buttonUrl: string) {
    this.props.buttonUrl = buttonUrl
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