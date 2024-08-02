import { HashGenerator } from '../cryptography/hash-generator'
import { Either, left, right } from '@/core/either'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { CarouselLink } from '../../enterprise/entities/carouselLink'
import { CarouselLinksRepository } from '../repositories/carousel-links-repository'

interface CreateCarouselLinkUseCaseRequest {
    color: string
    images: string
}

export type CreateCarouselLinkUseCaseResponse =  Either<
  null,
  {
    carouselLink: CarouselLink
  } 
>


export class CreateCarouselLinkUseCase {
  constructor(
    private carouselLinksRepository: CarouselLinksRepository,
  ) {}

  async execute({
    color,
    images,
  }: CreateCarouselLinkUseCaseRequest): Promise<CreateCarouselLinkUseCaseResponse> {
   
    const carouselLink = CarouselLink.create({
    color,
    images, 
    })

    await this.carouselLinksRepository.create(carouselLink)  
    
    return right({
      carouselLink,
    })
  
  }
}
