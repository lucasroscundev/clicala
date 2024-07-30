import { PaginationParams } from '@/core/repositories/pagination-params'
import { GroupCardsLink } from '../../enterprise/entities/groupCardsLink'

export abstract class GroupCardsLinksRepository {
  abstract findById(id: string): Promise<GroupCardsLink | null>
  abstract findByLinkId(linkId: string): Promise<GroupCardsLink | null>  
  abstract update(groupcardslink: GroupCardsLink): Promise<void>
  abstract create(groupcardslink: GroupCardsLink): Promise<void>
  abstract delete(groupcardslink: GroupCardsLink): Promise<void>
 }