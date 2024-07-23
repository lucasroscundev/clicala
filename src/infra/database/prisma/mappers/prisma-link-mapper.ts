import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Link } from '@/domain/forum/enterprise/entities/link'
import { Link as PrismaLink, Prisma } from '@prisma/client'

export class PrismaLinkMapper {
  static toDomain(raw: PrismaLink): Link {
    return Link.create(
      {
        url: raw.url,
        description: raw.description,
        userId: raw.userId,
        type: raw.type,
        size: raw.size,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,        
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(link: Link): Prisma.LinkUncheckedCreateInput {
    return {
      id: link.id.toString(),
      url: link.url,
      description: link.description,
      userId: link.userId,
      type: link.type,
      size: link.size,
      createdAt: link.createdAt,
      updatedAt: link.updatedAt,            
    }
  }
}