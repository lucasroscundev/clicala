import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"

export interface BannerLinkProps {
  imageUrl: string
  urlToRedirect: string
  size: string
}

export class BannerLink extends Entity<BannerLinkProps> {
  
  get imageUrl() {
    return this.props.imageUrl
  }

  set imageUrl(imageUrl: string) {
    this.props.imageUrl = imageUrl
  }

  get urlToRedirect() {
    return this.props.urlToRedirect
  }

  set urlToRedirect(urlToRedirect: string) {
    this.props.urlToRedirect = urlToRedirect
  }

  get size() {
    return this.props.size
  }

  set size(size: string) {
    this.props.size = size
  }

  static create(
    props: BannerLinkProps,
    id?: UniqueEntityID,
    ) {
    const bannerLink = new BannerLink({
        ...props,

    }, id)
    return bannerLink
  }

}
