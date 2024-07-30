import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"

export interface BannerLinkProps {
  linkId: string 
  imageUrl: string
  urlToRedirect: string
  size: string
}

export class BannerLink extends Entity<BannerLinkProps> {
  get linkId() {
    return this.linkId
  }

  set linkId(linkId: string){
    this.linkId = linkId
  }

  get imageUrl() {
    return this.imageUrl
  }

  set imageUrl(imageUrl: string) {
    this.imageUrl = imageUrl
  }

  get urlToRedirect() {
    return this.urlToRedirect
  }

  set urlToRedirect(urlToRedirect: string) {
    this.urlToRedirect = urlToRedirect
  }

  get size() {
    return this.size
  }

  set size(size: string) {
    this.size = size
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
