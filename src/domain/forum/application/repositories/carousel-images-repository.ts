import { PaginationParams } from '@/core/repositories/pagination-params'
import { CarouselImage } from '../../enterprise/entities/carouselImage'

export abstract class CarouselImagesRepository {
  abstract findById(id: string): Promise<CarouselImage | null>
  abstract findByCarouselLinkId(carouselLinkId: string): Promise<CarouselImage | null>  
  abstract update(carouselimage: CarouselImage): Promise<void>
  abstract create(carouselimage: CarouselImage): Promise<void>
  abstract delete(carouselimage: CarouselImage): Promise<void>
 }