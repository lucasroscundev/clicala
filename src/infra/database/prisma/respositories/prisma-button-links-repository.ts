/*
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { ButtonLink } from '@/domain/forum/enterprise/entities/buttonLink'
import { ButtonLinksRepository } from '@/domain/forum/application/repositories/button-links-repository'
import { PrismaButtonLinkMapper } from '../mappers/prisma-button-link-mapper'

@Injectable()
export class PrismaButtonLinksRepository implements ButtonLinksRepository {
  constructor(private prisma: PrismaService) {}
    
  async findByLinkId(linkId: string): Promise<ButtonLink | null> {
    const buttonLink = await this.prisma.buttonLink.findUnique({
      where: {
        linkId,
      },
    })

    if (!buttonLink) {
      return null
    }

      return PrismaButtonLinkMapper.toDomain(buttonLink)
  }

  async findById(id: string): Promise<ButtonLink | null> {
    const buttonLink = await this.prisma.buttonLink.findUnique({
      where: {
        id,
      },
    })

    if (!buttonLink) {
      return null
    }

    return PrismaButtonLinkMapper.toDomain(buttonLink)
  }

  async create(buttonLink: ButtonLink): Promise<void> {
    const data = PrismaButtonLinkMapper.toPrisma(buttonLink)

    await this.prisma.buttonLink.create({
      data,
    })
  }

  async update(buttonLink: ButtonLink): Promise<void> {
    const data = PrismaButtonLinkMapper.toPrisma(buttonLink)

    await this.prisma.buttonLink.update({
      where: {
        id: data.id,
      },
      data,
    })
  }

  async delete(buttonLink: ButtonLink): Promise<void> {
    const data = PrismaButtonLinkMapper.toPrisma(buttonLink)

    await this.prisma.buttonLink.delete({
      where: {
        id: data.id,
      },
    })
  }
}
  */