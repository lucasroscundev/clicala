import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Optional } from "@/core/types/optional"
import { BannerDocument, ButtonDocument, CardLinkDocument, CarouselDocument, CarouselImageDocument, GroupCards, LinkDocument, LinkType } from "@/infra/database/mongodb/schemas/links-schema"

export interface LinkProps {
  id: UniqueEntityID
  type: LinkType
  logo: string
  label: string
  userId: string
  color: string
  size: string
  urlToRedirect: string
  imageUrl: string
  banner: string
  button: string
  cards: string
  images: string
  groupCards: string
  carousel: string
  createdAt: Date
  updatedAt?: Date | null
}

export class Link extends Entity<LinkProps> {
    get id() {
      return this.props.id
    }

    get type() {
        return this.props.type
    }

    set type(type: LinkType) {
        this.props.type = type
        this.updated()
    }

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

    get userId() {
      return this.props.userId
    }

    set userId(userId: string) {
      this.props.userId = userId
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
      this.props.color = size
    }

    get urlToRedirect() {
      return this.props.urlToRedirect
    }

    set urlToRedirect(urlToRedirect: string) {
      this.props.urlToRedirect = urlToRedirect
    }
    
    get imageUrl() {
      return this.props.imageUrl
    }

    set imageUrl(imageUrl: string) {
      this.props.imageUrl = imageUrl
    }

    get banner() {
      return this.props.banner
    }

    set banner(banner: string) {
      this.props.banner = banner
    }

    get button() {
      return this.props.button
    }

    set button(button: string) {
      this.props.button = button
    }

    get cards() {
      return this.props.cards
    }

    set cards(cards: string) {
      this.props.cards = cards
    }

    get images() {
      return this.props.images
    }

    set images(images: string) {
      this.props.images = images
    }

    get groupCards() {
      return this.props.groupCards
    }

    set groupCards(groupCards: string) {
      this.props.groupCards = groupCards
    }

    get carousel() {
      return this.props.carousel
    }

    set carousel(carousel: string) {
      this.props.carousel = carousel
    }

    get createdAt() {
        return this.props.createdAt
    }

    get updatedAt() {
        return this.props.updatedAt
    }
    
    private updated() {
        this.props.updatedAt = new Date()
    }
    
  static create(
    props: Optional<LinkProps, 'createdAt'| 'logo' | 'label'| 'color'| 'size'| 'imageUrl'|
'banner'| 'button'| 'cards'| 'images'| 'groupCards'| 'carousel'  >, 
    //id?: UniqueEntityID,
    ) {
    const link = new Link(
      {
        ...props,                                 
        logo: props.logo ?? "",
        label: props.label ?? "",
        createdAt: props.createdAt ?? new Date(),  
        updatedAt: props.updatedAt,        
        color: props.color ?? "",
        size: props.size ?? "",
        urlToRedirect: props.urlToRedirect ?? "",
        imageUrl: props.imageUrl ?? "",
        banner: props.banner ?? "",
        button: props.button ?? "",
        cards: props.cards ?? "",
        images: props.images ?? "",
        groupCards: props.groupCards ?? "",
        carousel: props.carousel ?? "",
      }, new UniqueEntityID)

    return link
  }
}