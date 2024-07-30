import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ButtonLink } from '@/domain/forum/enterprise/entities/buttonLink'
import { ButtonLink as PrismaButtonLink, Prisma } from '@prisma/client'

export class PrismaButtonLinkMapper {
  static toDomain(raw: PrismaButtonLink): ButtonLink {
    return ButtonLink.create(
      {
        linkId: raw.linkId,
        logo: raw.logo,
        label: raw.label,
        color: raw.color,
        size: raw.size,
        urlToRedirect: raw.urlToRedirect,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(buttonLink: ButtonLink): Prisma.ButtonLinkUncheckedCreateInput {
    return {
      id: buttonLink.id.toString(),
      linkId: buttonLink.linkId,
      logo: buttonLink.logo,
      label: buttonLink.label,
      color: buttonLink.color,
      size: buttonLink.size,
      urlToRedirect: buttonLink.urlToRedirect,
    }
  }
}