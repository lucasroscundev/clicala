import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export interface GroupCardProps {
    color: string
    imageUrl: string
    buttonLogo: string
    buttonLabel: string
    buttonColor: string
    buttonSize: string
    buttonUrl: string
}

export class GroupCard extends Entity<GroupCardProps> {
    get color() {
        return this.props.color
    }

    set color(color: string) {
        this.props.color = color
    }

    get imageUrl() {
        return this.props.imageUrl
    }

    set imageUrl(imageUrl: string) {
        this.props.imageUrl = imageUrl
    }

    get buttonLogo() {
        return this.props.buttonLogo
    }

    set buttonLogo(buttonLogo: string) {
        this.props.buttonLogo = buttonLogo
    }
    
    get buttonLabel() {
        return this.props.buttonLabel
    }

    set buttonLabel(buttonLabel: string) {
        this.props.buttonLabel = buttonLabel
    }

    get buttonColor() {
        return this.props.buttonColor
    }

    set buttonColor(buttonColor: string) {
        this.props.buttonColor = buttonColor
    }

    get buttonSize() {
        return this.props.buttonSize
    }

    set buttonSize(buttonSize: string) {
        this.props.buttonSize = buttonSize
    }

    get buttonUrl() {
        return this.props.buttonUrl
    }

    set buttonUrl(buttonUrl: string) {
        this.props.buttonUrl = buttonUrl
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
