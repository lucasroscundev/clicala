import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { LinksRepository } from '@/domain/forum/application/repositories/links-repository'
import { Link } from '@/domain/forum/enterprise/entities/link'
import { PrismaLinkMapper } from '../mappers/prisma-link-mapper'

@Injectable()
export class PrismaLinksRepository implements LinksRepository {
  constructor(private prisma: PrismaService) {}
    
  async findByUserId(userId: string): Promise<Link[]> {
    const links = await this.prisma.link.findMany({
      where: {
        userId,
      },
    })

      return links.map(PrismaLinkMapper.toDomain)
  }

  async findById(id: string): Promise<Link | null> {
    const link = await this.prisma.link.findUnique({
      where: {
        id,
      },
    })

    if (!link) {
      return null
    }

    return PrismaLinkMapper.toDomain(link)
  }

  async create(link: Link): Promise<void> {
    const data = PrismaLinkMapper.toPrisma(link)

    await this.prisma.link.create({
      data,
    })
  }

  async update(link: Link): Promise<void> {
    const data = PrismaLinkMapper.toPrisma(link)

    await this.prisma.link.update({
      where: {
        id: data.id,
      },
      data,
    })
  }

  async delete(link: Link): Promise<void> {
    const data = PrismaLinkMapper.toPrisma(link)

    await this.prisma.link.delete({
      where: {
        id: data.id,
      },
    })
  }
}