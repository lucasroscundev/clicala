import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Entity } from "@/core/entities/entity"

export interface CarouselImageProps {
  imageUrl: string
  urlToRedirect: string
}

export class CarouselImage extends Entity<CarouselImageProps> {

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