import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { LinksRepository } from '../repositories/links-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Link } from '../../enterprise/entities/link'

interface GetLinkBySlugUseCaseRequest {
  id: UniqueEntityID
}

type GetLinkBySlugUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    link: Link
  }
>

export class GetLinkBySlugUseCase {
  constructor(private linksRepository: LinksRepository) {}

  async execute({
    id,
  }: GetLinkBySlugUseCaseRequest): Promise<GetLinkBySlugUseCaseResponse> {
    const link = await this.linksRepository.findById(id)

    if (!link) {
      return left(new ResourceNotFoundError())
    }

    return right({
      link,
    })
  }
}
