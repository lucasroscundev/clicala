import { PaginationParams } from '@/core/repositories/pagination-params'
import { BannerLink } from '../../enterprise/entities/bannerLink'

export abstract class BannerLinksRepository {
  abstract findById(id: string): Promise<BannerLink | null>
  abstract findByLinkId(linkId: string): Promise<BannerLink | null>  
  abstract update(bannerlink: BannerLink): Promise<void>
  abstract create(bannerlink: BannerLink): Promise<void>
  abstract delete(bannerlink: BannerLink): Promise<void>
 }