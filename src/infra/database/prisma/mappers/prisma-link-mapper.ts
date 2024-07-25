import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Link } from '@/domain/forum/enterprise/entities/link'
import { Link as PrismaLink, Prisma } from '@prisma/client'

export class PrismaLinkMapper {
  static toDomain(raw: PrismaLink): Link {
    return Link.create(
      {
        type: raw.type,        
        userId: raw.userId,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,                
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(link: Link): Prisma.LinkUncheckedCreateInput {
    return {
      id: link.id.toString(),      
      userId: link.userId.toString(),
      type: link.type,      
      createdAt: link.createdAt,
      updatedAt: link.updatedAt?.toDateString(),            
    }
  }
}