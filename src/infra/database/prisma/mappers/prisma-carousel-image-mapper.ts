import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { CarouselImage } from '@/domain/forum/enterprise/entities/carouselImage'
import { CarouselImage as PrismaCarouselImage, Prisma } from '@prisma/client'

export class PrismaCarouselImageMapper {
  static toDomain(raw: PrismaCarouselImage): CarouselImage {
    return CarouselImage.create(
      {         
        carouselLinkId: raw.carouselLinkId,
        imageUrl: raw.imageUrl,
        urlToRedirect: raw.urlToRedirect,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(carouselImage: CarouselImage): Prisma.CarouselImageUncheckedCreateInput {
    return {
      id: carouselImage.id.toString(),      
      carouselLinkId: carouselImage.carouselLinkId,
      imageUrl: carouselImage.imageUrl,
      urlToRedirect: carouselImage.urlToRedirect,
    }
  }
}