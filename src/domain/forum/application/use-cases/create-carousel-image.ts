import { HashGenerator } from '../cryptography/hash-generator'
import { Either, left, right } from '@/core/either'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { LinkType } from '@prisma/client'
import { CarouselImage } from '../../enterprise/entities/carouselImage'
import { CarouselImagesRepository } from '../repositories/carousel-images-repository'

interface CreateCarouselImageLinkUseCaseRequest {
  imageUrl: string
  urlToRedirect: string
}

export type CreateCarouselImageLinkUseCaseResponse =  Either<
  null,
  {
    carouselImage: CarouselImage
  } 
>


export class CreateCarouselImageLinkUseCase {
  constructor(
    private carouselImagesRepository: CarouselImagesRepository,
  ) {}

  async execute({
    imageUrl,
    urlToRedirect,
  }: CreateCarouselImageLinkUseCaseRequest): Promise<CreateCarouselImageLinkUseCaseResponse> {
   
    const carouselImage = CarouselImage.create({
    imageUrl,
    urlToRedirect, 
    })

    await this.carouselImagesRepository.create(carouselImage)  
    
    return right({
      carouselImage,
    })
  
  }
}
