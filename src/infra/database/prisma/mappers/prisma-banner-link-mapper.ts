/*
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { BannerLink } from '@/domain/forum/enterprise/entities/bannerLink'
import { BannerLink as PrismaBannerLink, Prisma } from '@prisma/client'

export class PrismaBannerLinkMapper {
  static toDomain(raw: PrismaBannerLink): BannerLink {
    return BannerLink.create(
      {
        linkId: raw.linkId,
        imageUrl: raw.imageUrl,
        urlToRedirect: raw.urlToRedirect,
        size: raw.size,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(bannerLink: BannerLink): Prisma.BannerLinkUncheckedCreateInput {
    return {
      id: bannerLink.id.toString(),
      linkId: bannerLink.linkId,
      imageUrl: bannerLink.imageUrl,
      urlToRedirect: bannerLink.urlToRedirect,
      size: bannerLink.size,      
      }
  }
}
  */