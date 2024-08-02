/*
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { CarouselLink } from '@/domain/forum/enterprise/entities/carouselLink'
import { CarouselLink as PrismaCarouselLink, Prisma } from '@prisma/client'

export class PrismaCarouselLinkMapper {
  static toDomain(raw: PrismaCarouselLink): CarouselLink {
    return CarouselLink.create(
      {         
        linkId: raw.linkId,        
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(carouselLink: CarouselLink): Prisma.CarouselLinkUncheckedCreateInput {
    return {
      id: carouselLink.id.toString(),      
      linkId: carouselLink.linkId,      
    }
  }
}
  */