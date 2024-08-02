/*
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { BannerLinksRepository } from '@/domain/forum/application/repositories/banner-links-repository'
import { BannerLink } from '@/domain/forum/enterprise/entities/bannerLink'
import { PrismaBannerLinkMapper } from '../mappers/prisma-banner-link-mapper'

@Injectable()
export class PrismaBannerLinksRepository implements BannerLinksRepository {
  constructor(private prisma: PrismaService) {}
    
  async findByLinkId(linkId: string): Promise<BannerLink | null> {
    const bannerLink = await this.prisma.bannerLink.findUnique({
      where: {
        linkId,
      },
    })

    if (!bannerLink) {
      return null
    }

      return PrismaBannerLinkMapper.toDomain(bannerLink)
  }

  async findById(id: string): Promise<BannerLink | null> {
    const bannerLink = await this.prisma.bannerLink.findUnique({
      where: {
        id,
      },
    })

    if (!bannerLink) {
      return null
    }

    return PrismaBannerLinkMapper.toDomain(bannerLink)
  }

  async create(bannerLink: BannerLink): Promise<void> {
    const data = PrismaBannerLinkMapper.toPrisma(bannerLink)

    await this.prisma.bannerLink.create({
      data,
    })
  }

  async update(bannerLink: BannerLink): Promise<void> {
    const data = PrismaBannerLinkMapper.toPrisma(bannerLink)

    await this.prisma.bannerLink.update({
      where: {
        id: data.id,
      },
      data,
    })
  }

  async delete(bannerLink: BannerLink): Promise<void> {
    const data = PrismaBannerLinkMapper.toPrisma(bannerLink)

    await this.prisma.bannerLink.delete({
      where: {
        id: data.id,
      },
    })
  }
}
  */