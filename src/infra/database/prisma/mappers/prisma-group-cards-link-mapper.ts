import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { GroupCardsLink } from '@/domain/forum/enterprise/entities/groupCardsLink'
import { GroupCardsLink as PrismaGroupCardsLink, Prisma } from '@prisma/client'

export class PrismaGroupCardsLinkMapper {
  static toDomain(raw: PrismaGroupCardsLink): GroupCardsLink {
    return GroupCardsLink.create(
      {         
        linkId: raw.linkId,        
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(groupCardsLink: GroupCardsLink): Prisma.GroupCardsLinkUncheckedCreateInput {
    return {
      id: groupCardsLink.id.toString(),      
      linkId: groupCardsLink.linkId,      
    }
  }
}