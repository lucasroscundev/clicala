import { PaginationParams } from '@/core/repositories/pagination-params'
import { Link } from '../../enterprise/entities/link';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

export abstract class LinksRepository {
  abstract findById(id: UniqueEntityID): Promise<Link | null>
  abstract findByUserId(
    userId: string,
    params: PaginationParams,
  ): Promise<Link[]>  
  abstract update(link: Link): Promise<void>
  abstract create(link: Link): Promise<void>
  abstract delete(link: Link): Promise<void>
 }