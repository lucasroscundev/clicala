import { HashGenerator } from '../cryptography/hash-generator'
import { Either, left, right } from '@/core/either'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { LinkType } from '@prisma/client'
import { BannerLink } from '../../enterprise/entities/bannerLink'
import { BannerLinksRepository } from '../repositories/banner-links-repository'

interface CreateBannerLinkUseCaseRequest {
  imageUrl: string
  urlToRedirect: string
  size: string
}

export type CreateBannerLinkUseCaseResponse =  Either<
  null,
  {
    bannerLink: BannerLink
  } 
>


export class CreateBannerLinkUseCase {
  constructor(
    private bannerLinksrepository: BannerLinksRepository,
  ) {}

  async execute({
    imageUrl,
    urlToRedirect,
    size,
  }: CreateBannerLinkUseCaseRequest): Promise<CreateBannerLinkUseCaseResponse> {
   
    const bannerLink = BannerLink.create({
    imageUrl,
    urlToRedirect,
    size,
    })

    await this.bannerLinksrepository.create(bannerLink)  
    
    return right({
      bannerLink,
    })
  
  }
}
