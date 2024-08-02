/*
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { CarouselLink } from '@/domain/forum/enterprise/entities/carouselLink'
import { CarouselLinksRepository } from '@/domain/forum/application/repositories/carousel-links-repository'
import { PrismaCarouselLinkMapper } from '../mappers/prisma-carousel-link-mapper'

@Injectable()
export class PrismaCarouselLinksRepository implements CarouselLinksRepository {
  constructor(private prisma: PrismaService) {}
    
  async findByLinkId(linkId: string): Promise<CarouselLink | null> {
    const carouselLink = await this.prisma.carouselLink.findUnique({
      where: {
        linkId,
      },
    })

    if (!carouselLink) {
      return null
    }

      return PrismaCarouselLinkMapper.toDomain(carouselLink)
  }

  async findById(id: string): Promise<CarouselLink | null> {
    const carouselLink = await this.prisma.carouselLink.findUnique({
      where: {
        id,
      },
    })

    if (!carouselLink) {
      return null
    }

    return PrismaCarouselLinkMapper.toDomain(carouselLink)
  }

  async create(carouselLink: CarouselLink): Promise<void> {
    const data = PrismaCarouselLinkMapper.toPrisma(carouselLink)

    await this.prisma.carouselLink.create({
      data,
    })
  }

  async update(carouselLink: CarouselLink): Promise<void> {
    const data = PrismaCarouselLinkMapper.toPrisma(carouselLink)

    await this.prisma.carouselLink.update({
      where: {
        id: data.id,
      },
      data,
    })
  }

  async delete(carouselLink: CarouselLink): Promise<void> {
    const data = PrismaCarouselLinkMapper.toPrisma(carouselLink)

    await this.prisma.carouselLink.delete({
      where: {
        id: data.id,
      },
    })
  }
}
  */