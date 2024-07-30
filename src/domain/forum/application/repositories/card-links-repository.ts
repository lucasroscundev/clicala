import { PaginationParams } from '@/core/repositories/pagination-params'
import { CardLink } from '../../enterprise/entities/cardLink'

export abstract class CardLinksRepository {
  abstract findById(id: string): Promise<CardLink | null>
  abstract findByLinkId(linkId: string): Promise<CardLink | null>  
  abstract update(cardlink: CardLink): Promise<void>
  abstract create(cardlink: CardLink): Promise<void>
  abstract delete(cardlink: CardLink): Promise<void>
 }