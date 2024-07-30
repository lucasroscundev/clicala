import { PaginationParams } from '@/core/repositories/pagination-params'
import { ButtonLink } from '../../enterprise/entities/buttonLink'

export abstract class ButtonLinksRepository {
  abstract findById(id: string): Promise<ButtonLink | null>
  abstract findByLinkId(linkId: string): Promise<ButtonLink | null>  
  abstract update(buttonlink: ButtonLink): Promise<void>
  abstract create(buttonlink: ButtonLink): Promise<void>
  abstract delete(buttonlink: ButtonLink): Promise<void>
 }