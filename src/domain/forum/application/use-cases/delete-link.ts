import { Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { NotAllowedError } from '@/core/errors/errors/not-allowed-error'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { LinksRepository } from '../repositories/links-repository'

interface DeleteLinkUseCaseRequest {
  id: UniqueEntityID
  userId: string
}

type DeleteLinkUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  null
>
export class DeleteLinkUseCase {
  constructor(private linksRepository: LinksRepository) {}

  async execute({
    id,
    userId,
  }: DeleteLinkUseCaseRequest): Promise<DeleteLinkUseCaseResponse> {
    const link = await this.linksRepository.findById(id)

    if (!link) {
      return left(new ResourceNotFoundError())
    }

    if (userId !== link.userId.toString()) {
      return left(new NotAllowedError())
    }

    await this.linksRepository.delete(link)

    return right(null)
  }
}
