import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { CardLink } from '@/domain/forum/enterprise/entities/cardLink'
import { CardLink as PrismaCardLink, Prisma } from '@prisma/client'

export class PrismaCardLinkMapper {
  static toDomain(raw: PrismaCardLink): CardLink {
    return CardLink.create(
      {        
        linkId: raw. linkId,
        imageUrl: raw. imageUrl,
        buttonLabel: raw. buttonLabel,
        buttonColor: raw. buttonColor,
        buttonSize: raw. buttonSize,
        buttonUrl: raw. buttonUrl,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(cardLink: CardLink): Prisma.CardLinkUncheckedCreateInput {
    return {
      id: cardLink.id.toString(),
      linkId: cardLink.linkId,
      imageUrl: cardLink.imageUrl,
      buttonLabel: cardLink.buttonLabel,
      buttonColor: cardLink.buttonColor,
      buttonSize: cardLink.buttonSize,
      buttonUrl: cardLink.buttonUrl,
    }
  }
}