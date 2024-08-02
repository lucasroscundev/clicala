import { HashGenerator } from '../cryptography/hash-generator'
import { Link } from '../../enterprise/entities/link'
import { LinksRepository } from '../repositories/links-repository'
import { Either, left, right } from '@/core/either'
import { LinkAlreadyExistsError } from './errors/link-already-exists-error'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { BannerLinksRepository } from '../repositories/banner-links-repository'
import { ButtonLinksRepository } from '../repositories/button-links-repository'
import { CarouselLinksRepository } from '../repositories/carousel-links-repository'
import { CardLinksRepository } from '../repositories/card-links-repository'
import { GroupCardsLinksRepository } from '../repositories/group-cards-links-repository'
import { LinkType } from '@/infra/database/mongodb/schemas/links-schema'
import { NewLinkDTO } from '@/infra/database/mongodb/dto/link.dto'

interface CreateLinkUseCaseRequest {
  type: LinkType
  logo: string
  label: string
  createdAt: Date
  userId: string
  color: string
  size: string
  urlToRedirect: string
  imageUrl: string
  banner: string
  button: string
  cards: string
  images: string
  groupCards: string
  carousel: string
}

export type CreateLinkUseCaseResponse =  Either<
  LinkAlreadyExistsError,
  {
    link: Link
  } 
>


export class CreateLinkUseCase {
  constructor(
    private linksRepository: LinksRepository,
  ) {}

  async execute({
    type,
    logo,
    label,
    createdAt,
    userId,
    color,
    size,
    urlToRedirect,
    imageUrl,
    banner,
    button,
    cards,
    images,
    groupCards,
    carousel,
    }: CreateLinkUseCaseRequest): Promise<CreateLinkUseCaseResponse> {
    
    const link = Link.create({
      id: new UniqueEntityID,
      type,
      logo,
      label,
      createdAt,
      userId,
      color,
      size,
      urlToRedirect,
      imageUrl,
      banner,
      button,
      cards,
      images,
      groupCards,
      carousel,
    })

 
    await this.linksRepository.create(link)  
    
    return right({
      link,
    })
  
  }
}
