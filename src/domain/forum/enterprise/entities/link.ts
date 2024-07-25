import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Optional } from "@/core/types/optional"
import { LinkType } from "@prisma/client"

export interface LinkProps {
    type: LinkType
    createdAt: Date
    updatedAt?: Date | null
    userId: string
}

export class Link extends Entity<LinkProps> {
    
    get userId() {
        return this.props.userId
    }
    
    set userId(userId: string) {
        this.userId = userId
        this.updated()
    }
    
    get type() {
        return this.props.type
    }

    set type(type: LinkType) {
        this.props.type = type
        this.updated()
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
    props: Optional<LinkProps, 'createdAt' >, 
    id?: UniqueEntityID,
    ) {
    const link = new Link(
      {
        ...props,        
        type: props.type,                             
        createdAt: props.createdAt ?? new Date(),
        userId: props.userId,
      }, id)

    return link
  }
}