import { HashGenerator } from '../cryptography/hash-generator'
import { Either, left, right } from '@/core/either'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { LinkType } from '@prisma/client'
import { CarouselLink } from '../../enterprise/entities/carouselLink'
import { CarouselLinksRepository } from '../repositories/carousel-links-repository'

interface CreateGroupCardsLinkLinkUseCaseRequest {
  linkId: string 
}

export type CreateGroupCardsLinkLinkUseCaseResponse =  Either<
  null,
  {
    carouselLink: CarouselLink
  } 
>


export class CreateGroupCardsLinkLinkUseCase {
  constructor(
    private carouselLinksRepository: CarouselLinksRepository,
  ) {}

  async execute({
    linkId,
  }: CreateGroupCardsLinkLinkUseCaseRequest): Promise<CreateGroupCardsLinkLinkUseCaseResponse> {
   
    const carouselLink = CarouselLink.create({
    linkId, 
    })

    await this.carouselLinksRepository.create(carouselLink)  
    
    return right({
      carouselLink,
    })
  
  }
}
