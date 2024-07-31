import { HashGenerator } from '../cryptography/hash-generator'
import { Link } from '../../enterprise/entities/link'
import { LinksRepository } from '../repositories/links-repository'
import { Either, left, right } from '@/core/either'
import { LinkAlreadyExistsError } from './errors/link-already-exists-error'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { LinkType } from '@prisma/client'
import { NewLinkDTO } from '@/infra/http/dto/create-link.dto'
import { BannerLinksRepository } from '../repositories/banner-links-repository'
import { ButtonLinksRepository } from '../repositories/button-links-repository'
import { CarouselLinksRepository } from '../repositories/carousel-links-repository'
import { CardLinksRepository } from '../repositories/card-links-repository'
import { GroupCardsLinksRepository } from '../repositories/group-cards-links-repository'

interface CreateLinkUseCaseRequest {
    userId: string
    type: LinkType    
    createdAt: Date
}

export type CreateLinkUseCaseResponse =  Either<
  LinkAlreadyExistsError,
  {
    link: NewLinkDTO
  } 
>


export class CreateLinkUseCase {
  constructor(
    private linksRepository: LinksRepository,
    /*private bannerLinksRepository: BannerLinksRepository,
    private buttonLinksRepository: ButtonLinksRepository,
    private carouselLinksRepository: CarouselLinksRepository,
    private cardLinksRepository: CardLinksRepository,
    private groupCardsLinksRepository: GroupCardsLinksRepository,*/
  ) {}

  async execute({
    userId,
    type,
    createdAt,
  }: CreateLinkUseCaseRequest): Promise<CreateLinkUseCaseResponse> {
    //Search for user in links, then search for the same URL
    /*const userAlreadyHasALink =
       await this.linksrepository.findByUserId(userId)

    const urlAlreadyExists = 
        await this.linksrepository.findByUrl(url)*/
   
    const link = Link.create({
    type,
    userId,    
    createdAt,
    })

 
    /*if(userAlreadyHasALink && urlAlreadyExists) {
      return left(new LinkAlreadyExistsError())
      console.error(link)      
    }*/

    await this.linksRepository.create(link)  
    
    return right({
      link,
    })
  
  }
}
