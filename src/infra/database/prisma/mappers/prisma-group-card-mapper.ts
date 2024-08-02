/*
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { GroupCard } from '@/domain/forum/enterprise/entities/groupCard'
import { GroupCard as PrismaGroupCard, Prisma } from '@prisma/client'

export class PrismaGroupCardMapper {
  static toDomain(raw: PrismaGroupCard): GroupCard {
    return GroupCard.create(
      {         
        groupCardsLinkId: raw.groupCardsLinkId,
        imageUrl: raw.imageUrl,
        buttonLabel: raw.buttonLabel,
        buttonColor: raw.buttonColor,
        buttonSize: raw.buttonSize,
        buttonUrl: raw.buttonUrl,        
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(groupCard: GroupCard): Prisma.GroupCardUncheckedCreateInput {
    return {
      id: groupCard.id.toString(),            
      groupCardsLinkId: groupCard.groupCardsLinkId,
      imageUrl: groupCard.imageUrl,
      buttonLabel: groupCard.buttonLabel,
      buttonColor: groupCard.buttonColor,
      buttonSize: groupCard.buttonSize,
      buttonUrl: groupCard.buttonUrl,      
    }
  }
}
  */