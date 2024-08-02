/*
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { GroupCardsLink } from '@/domain/forum/enterprise/entities/groupCardsLink'
import { GroupCardsLinksRepository } from '@/domain/forum/application/repositories/group-cards-links-repository'
import { PrismaGroupCardsLinkMapper } from '../mappers/prisma-group-cards-link-mapper'

@Injectable()
export class PrismaGroupCardsLinksRepository implements GroupCardsLinksRepository {
  constructor(private prisma: PrismaService) {}
    
  async findByLinkId(linkId: string): Promise<GroupCardsLink | null> {
    const groupCardsLink = await this.prisma.groupCardsLink.findUnique({
      where: {
        linkId,
      },
    })

    if (!groupCardsLink) {
      return null
    }

      return PrismaGroupCardsLinkMapper.toDomain(groupCardsLink)
  }

  async findById(id: string): Promise<GroupCardsLink | null> {
    const groupCardsLink = await this.prisma.groupCardsLink.findUnique({
      where: {
        id,
      },
    })

    if (!groupCardsLink) {
      return null
    }

    return PrismaGroupCardsLinkMapper.toDomain(groupCardsLink)
  }

  async create(groupCardsLink: GroupCardsLink): Promise<void> {
    const data = PrismaGroupCardsLinkMapper.toPrisma(groupCardsLink)

    await this.prisma.groupCardsLink.create({
      data,
    })
  }

  async update(groupCardsLink: GroupCardsLink): Promise<void> {
    const data = PrismaGroupCardsLinkMapper.toPrisma(groupCardsLink)

    await this.prisma.groupCardsLink.update({
      where: {
        id: data.id,
      },
      data,
    })
  }

  async delete(groupCardsLink: GroupCardsLink): Promise<void> {
    const data = PrismaGroupCardsLinkMapper.toPrisma(groupCardsLink)

    await this.prisma.groupCardsLink.delete({
      where: {
        id: data.id,
      },
    })
  }
}
  */