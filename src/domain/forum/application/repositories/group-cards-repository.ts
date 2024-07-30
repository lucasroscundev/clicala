import { PaginationParams } from '@/core/repositories/pagination-params'
import { GroupCard } from '../../enterprise/entities/groupCard'

export abstract class GroupCardsRepository {
  abstract findById(id: string): Promise<GroupCard | null>
  abstract findByGroupCardLinkId(groupCardlinkId: string): Promise<GroupCard | null>  
  abstract update(groupcard: GroupCard): Promise<void>
  abstract create(groupcard: GroupCard): Promise<void>
  abstract delete(groupcard: GroupCard): Promise<void>
 }