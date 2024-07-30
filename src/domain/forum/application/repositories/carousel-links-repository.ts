import { PaginationParams } from '@/core/repositories/pagination-params'
import { CarouselLink } from '../../enterprise/entities/carouselLink'

export abstract class CarouselLinksRepository {
  abstract findById(id: string): Promise<CarouselLink | null>
  abstract findByLinkId(linkId: string): Promise<CarouselLink | null>  
  abstract update(carousellink: CarouselLink): Promise<void>
  abstract create(carousellink: CarouselLink): Promise<void>
  abstract delete(carousellink: CarouselLink): Promise<void>
 }