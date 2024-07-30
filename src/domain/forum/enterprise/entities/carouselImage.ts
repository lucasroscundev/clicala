import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Entity } from "@/core/entities/entity"

export interface CarouselImageProps {
  carouselLinkId: string
  imageUrl: string
  urlToRedirect: string
}

export class CarouselImage extends Entity<CarouselImageProps> {
    get carouselLinkId() {
      return this.carouselLinkId
    }
    
    set carouselLinkId(carouselLinkId: string) {
        this.carouselLinkId = carouselLinkId
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
  
    static create(
        props: CarouselImageProps,
        id?: UniqueEntityID,
    ) {
        const carouselImage = new CarouselImage({
            ...props,

        }, id)
        return carouselImage
    }
}