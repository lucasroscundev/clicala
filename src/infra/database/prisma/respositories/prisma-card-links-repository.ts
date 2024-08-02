/*
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { CardLink } from '@/domain/forum/enterprise/entities/cardLink'
import { CardLinksRepository } from '@/domain/forum/application/repositories/card-links-repository'
import { PrismaCardLinkMapper } from '../mappers/prisma-card-link-mapper'

@Injectable()
export class PrismaCardLinksRepository implements CardLinksRepository {
  constructor(private prisma: PrismaService) {}
    
  async findByLinkId(linkId: string): Promise<CardLink | null> {
    const cardLink = await this.prisma.cardLink.findUnique({
      where: {
        linkId,
      },
    })

    if (!cardLink) {
      return null
    }

      return PrismaCardLinkMapper.toDomain(cardLink)
  }

  async findById(id: string): Promise<CardLink | null> {
    const cardLink = await this.prisma.cardLink.findUnique({
      where: {
        id,
      },
    })

    if (!cardLink) {
      return null
    }

    return PrismaCardLinkMapper.toDomain(cardLink)
  }

  async create(cardLink: CardLink): Promise<void> {
    const data = PrismaCardLinkMapper.toPrisma(cardLink)

    await this.prisma.cardLink.create({
      data,
    })
  }

  async update(cardLink: CardLink): Promise<void> {
    const data = PrismaCardLinkMapper.toPrisma(cardLink)

    await this.prisma.cardLink.update({
      where: {
        id: data.id,
      },
      data,
    })
  }

  async delete(cardLink: CardLink): Promise<void> {
    const data = PrismaCardLinkMapper.toPrisma(cardLink)

    await this.prisma.cardLink.delete({
      where: {
        id: data.id,
      },
    })
  }
}
  */