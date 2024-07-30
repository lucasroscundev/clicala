import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export interface GroupCardProps {
    groupCardsLinkId: string
    imageUrl: string
    buttonLabel: string
    buttonColor: string
    buttonSize: string
    buttonUrl: string
}

export class GroupCard extends Entity<GroupCardProps> {
    get groupCardsLinkId() {
        return this.groupCardsLinkId
    }

    set groupCardsLinkId(groupCardsLinkId: string) {
        this.groupCardsLinkId = groupCardsLinkId
    }

    get imageUrl() {
        return this.imageUrl
    }

    set imageUrl(imageUrl: string) {
        this.imageUrl = imageUrl
    }
    
    get buttonLabel() {
        return this.buttonLabel
    }

    set buttonLabel(buttonLabel: string) {
        this.buttonLabel = buttonLabel
    }

        get buttonColor() {
        return this.buttonColor
    }

    set buttonColor(buttonColor: string) {
        this.buttonColor = buttonColor
    }

    get buttonSize() {
        return this.buttonSize
    }

    set buttonSize(buttonSize: string) {
        this.buttonSize = buttonSize
    }

    get buttonUrl() {
        return this.buttonUrl
    }

    set buttonUrl(buttonUrl: string) {
        this.buttonUrl = buttonUrl
    }

    static create(
        props: GroupCardProps,
        id?: UniqueEntityID,
    ) {
        const groupCard = new GroupCard({
            ...props,

        }, id)
        return groupCard
    }
}
