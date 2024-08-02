import { HashGenerator } from '../cryptography/hash-generator'
import { Either, left, right } from '@/core/either'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { CarouselLink } from '../../enterprise/entities/carouselLink'
import { GroupCardsLink } from '../../enterprise/entities/groupCardsLink'
import { GroupCardsLinksRepository } from '../repositories/group-cards-links-repository'

interface CreateGroupCardsLinkLinkUseCaseRequest {
  linkId: string 
}

export type CreateGroupCardsLinkLinkUseCaseResponse =  Either<
  null,
  {
    groupCardsLink: GroupCardsLink
  } 
>


export class CreateGroupCardsLinkLinkUseCase {
  constructor(
    private groupCardsLinkRepository: GroupCardsLinksRepository,
  ) {}

  async execute({
    linkId,
  }: CreateGroupCardsLinkLinkUseCaseRequest): Promise<CreateGroupCardsLinkLinkUseCaseResponse> {
   
    const groupCardsLink = GroupCardsLink.create({
    linkId, 
    })

    await this.groupCardsLinkRepository.create(groupCardsLink)  
    
    return right({
      groupCardsLink,
    })
  
  }
}
