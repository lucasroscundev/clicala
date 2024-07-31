import { HashGenerator } from '../cryptography/hash-generator'
import { Either, left, right } from '@/core/either'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { LinkType } from '@prisma/client'
import { CardLink } from '../../enterprise/entities/cardLink'
import { CardLinksRepository } from '../repositories/card-links-repository'

interface CreateCardLinkUseCaseRequest {
  linkId: string
  imageUrl: string
  buttonLabel: string
  buttonColor: string
  buttonSize: string
  buttonUrl: string 
}

export type CreateCardLinkUseCaseResponse =  Either<
  null,
  {
    cardLink: CardLink
  } 
>


export class CreateCardLinkUseCase {
  constructor(
    private cardLinksRepository: CardLinksRepository,
  ) {}

  async execute({
    linkId,
    imageUrl,
    buttonLabel,
    buttonColor,
    buttonSize,
    buttonUrl,
  }: CreateCardLinkUseCaseRequest): Promise<CreateCardLinkUseCaseResponse> {
   
    const cardLink = CardLink.create({
    linkId,
    imageUrl,
    buttonLabel,
    buttonColor,
    buttonSize,
    buttonUrl,
    })

    await this.cardLinksRepository.create(cardLink)  
    
    return right({
      cardLink,
    })
  
  }
}
