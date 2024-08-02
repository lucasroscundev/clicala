/*
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { CarouselImage } from '@/domain/forum/enterprise/entities/carouselImage'
import { CarouselImagesRepository } from '@/domain/forum/application/repositories/carousel-images-repository'
import { PrismaCarouselImageMapper } from '../mappers/prisma-carousel-image-mapper'

@Injectable()
export class PrismaCarouselImagesRepository implements CarouselImagesRepository {
  constructor(private prisma: PrismaService) {}
    
  async findByCarouselLinkId(carouselLinkId: string): Promise<CarouselImage | null> {
    const carouselImage = await this.prisma.carouselImage.findUnique({
      where: {
        carouselLinkId,
      },
    })

    if (!carouselImage) {
      return null
    }

      return PrismaCarouselImageMapper.toDomain(carouselImage)
  }

  async findById(id: string): Promise<CarouselImage | null> {
    const carouselImage = await this.prisma.carouselImage.findUnique({
      where: {
        id,
      },
    })

    if (!carouselImage) {
      return null
    }

    return PrismaCarouselImageMapper.toDomain(carouselImage)
  }

  async create(carouselImage: CarouselImage): Promise<void> {
    const data = PrismaCarouselImageMapper.toPrisma(carouselImage)

    await this.prisma.carouselImage.create({
      data,
    })
  }

  async update(carouselImage: CarouselImage): Promise<void> {
    const data = PrismaCarouselImageMapper.toPrisma(carouselImage)

    await this.prisma.carouselImage.update({
      where: {
        id: data.id,
      },
      data,
    })
  }

  async delete(carouselImage: CarouselImage): Promise<void> {
    const data = PrismaCarouselImageMapper.toPrisma(carouselImage)

    await this.prisma.carouselImage.delete({
      where: {
        id: data.id,
      },
    })
  }
}
  */