import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Entity } from "@/core/entities/entity"

export interface CarouselLinkProps {
    color: string
    images: string
}

export class CarouselLink extends Entity<CarouselLinkProps> {
    get color() {
      return this.props.color
    }
    
    set color(color: string) {
        this.props.color = color
    }

    get images() {
      return this.props.images
    }
    
    set images(images: string) {
        this.props.images = images
    }

    static create(
        props: CarouselLinkProps,
        id?: UniqueEntityID,
    ) {
        const carouselLink = new CarouselLink({
            ...props,
            images: props.images ?? "",

        }, id)
        return carouselLink
    }
}