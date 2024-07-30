import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"

export interface ButtonLinkProps {
  linkId: string
  logo: string
  label: string
  color: string
  size: string
  urlToRedirect: string
}

export class ButtonLink extends Entity<ButtonLinkProps> {
  get linkId() {
    return this.linkId
  }

  set linkId(linkId: string) {
    this.linkId = linkId
  }

  get logo() {
    return this.logo
  }

  set logo(logo: string) {
    this.logo = logo
  }

  get label() {
    return this.label
  }

  set label(label: string) {
    this.label = label
  }

  get color() {
    return this.color
  }

  set color(color: string) {
    this.color = color
  }

  get size() {
    return this.size
  }

  set size(size: string) {
    this.size = size
  }

    get urlToRedirect() {
    return this.urlToRedirect
  }

  set urlToRedirect(urlToRedirect: string) {
    this.urlToRedirect = urlToRedirect
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