import { Either, right } from '@/core/either'
import { Link } from '../../enterprise/entities/link'
import { LinksRepository } from '../repositories/links-repository'

interface FetchQuestionLinksUseCaseRequest {
  userId: string
  page: number
}

type FetchQuestionLinksUseCaseResponse = Either<
  null,
  {
    links: Link[]
  }
>

export class FetchQuestionLinksUseCase {
  constructor(private linksRepository: LinksRepository) {}

  async execute({
    userId,
    page,
  }: FetchQuestionLinksUseCaseRequest): Promise<FetchQuestionLinksUseCaseResponse> {
    const links = await this.linksRepository.findByUserId(
      userId,
      { page },
    )

    return right({
      links,
    })
  }
}
