import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"

export interface ButtonLinkProps {
  logo: string
  label: string
  color: string
  size: string
  urlToRedirect: string
}

export class ButtonLink extends Entity<ButtonLinkProps> {

  get logo() {
    return this.props.logo
  }

  set logo(logo: string) {
    this.props.logo = logo
  }

  get label() {
    return this.props.label
  }

  set label(label: string) {
    this.props.label = label
  }

  get color() {
    return this.props.color
  }

  set color(color: string) {
    this.props.color = color
  }

  get size() {
    return this.props.size
  }

  set size(size: string) {
    this.props.size = size
  }

  get urlToRedirect() {
    return this.props.urlToRedirect
  }

  set urlToRedirect(urlToRedirect: string) {
    this.props.urlToRedirect = urlToRedirect
  }

  static create(
    props: ButtonLinkProps,
    id?: UniqueEntityID,
    ) {
    const buttonLink = new ButtonLink({
        ...props,

    }, id)
    return buttonLink
  }
}