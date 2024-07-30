import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Entity } from "@/core/entities/entity"

export interface GroupCardsLinkProps {
    linkId: string
}

export class GroupCardsLink extends Entity<GroupCardsLinkProps> {
    get linkId() {
      return this.linkId
    }
    
    set linkId(linkId: string) {
        this.linkId = linkId
    }

    static create(
        props: GroupCardsLinkProps,
        id?: UniqueEntityID,
    ) {
        const groupCardsLink = new GroupCardsLink({
            ...props,

        }, id)
        return groupCardsLink
    }
}