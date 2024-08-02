import { HashGenerator } from '../cryptography/hash-generator'
import { Either, left, right } from '@/core/either'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { LinkType } from '@/infra/database/mongodb/schemas/links-schema'
import { CardLink } from '../../enterprise/entities/cardLink'
import { CardLinksRepository } from '../repositories/card-links-repository'

interface CreateCardLinkUseCaseRequest {
  imageUrl: string
  buttonLogo: string
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
    imageUrl,
    buttonLogo,
    buttonLabel,
    buttonColor,
    buttonSize,
    buttonUrl,
  }: CreateCardLinkUseCaseRequest): Promise<CreateCardLinkUseCaseResponse> {
   
    const cardLink = CardLink.create({
    imageUrl,
    buttonLogo,
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
