import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Optional } from "@/core/types/optional"

export interface LinkProps {
    url: string
    description: string
    userId: string
    type: string
    size: string 
    createdAt: Date
    updatedAt?: Date | null
}

export class Link extends Entity<LinkProps> {
    
    get url() {
        return this.props.url
    }
    
    set url (url: string) {
        this.props.url = url
        this.updated()
    }

    get description() {
        return this.props.description
    }

    set description(description: string) {
        this.props.description = description
        this.updated()
    }
    
    get userId() {
        return this.props.userId
    }
    /*
    set userId(userId: string) {
        this.userId = userId
        this.updated()
    }
    */

    get type() {
        return this.props.type
    }

    set type(type: string) {
        this.props.type = type
        this.updated()
    }

    get size(){
        return this.props.size
    }

    set size(size: string) {
        this.props.size = size
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
    props: Optional<LinkProps, 'description' | 'createdAt' >, 
    id?: UniqueEntityID,
    ) {
    const link = new Link(
      {
        ...props,
        url: props.url,
        userId: props.userId,
        type: props.type,
        size: props.size,                
        description: props.description ?? "",
        createdAt: props.createdAt ?? new Date(),
      }, id)

    return link
  }
}