import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Entity } from "@/core/entities/entity"

export interface CarouselLinkProps {
    linkId: string
}

export class CarouselLink extends Entity<CarouselLinkProps> {
    get linkId() {
      return this.linkId
    }
    
    set linkId(linkId: string) {
        this.linkId = linkId
    }

    static create(
        props: CarouselLinkProps,
        id?: UniqueEntityID,
    ) {
        const carouselLink = new CarouselLink({
            ...props,

        }, id)
        return carouselLink
    }
}