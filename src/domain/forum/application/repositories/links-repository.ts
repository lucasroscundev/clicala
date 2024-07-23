import { PaginationParams } from '@/core/repositories/pagination-params'
import { Link } from '../../enterprise/entities/link';

export abstract class LinksRepository {
  abstract findById(id: string): Promise<Link | null>
  abstract findByUserId(userId: string): Promise<Link | null>
  abstract findByUrl(url: string): Promise<Link | null>
  abstract update(link: Link): Promise<void>
  abstract create(link: Link): Promise<void>
  abstract delete(link: Link): Promise<void>
 }