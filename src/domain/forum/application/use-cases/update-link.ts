import { Either, left, right } from '@/core/either'
import { NotAllowedError } from '@/core/errors/errors/not-allowed-error'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { LinkType } from '@/infra/database/mongodb/schemas/links-schema'
import { Link } from '../../enterprise/entities/link'
import { LinksRepository } from '../repositories/links-repository'

interface EditLinkUseCaseRequest {
  id: UniqueEntityID
  type: LinkType
  logo: string
  label: string
  createdAt: Date
  updatedAt?: Date | null
  userId: string
  color: string
  size: string
  urlToRedirect: string
  imageUrl: string
  banner: string
  button: string
  cards: string
  images: string
  groupCards: string
  carousel: string
}

type EditLinkUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    link: Link
  }
>

export class EditLinkUseCase {
  constructor(
    private linksRepository: LinksRepository,    
  ) {}

  async execute({
    id,
    type,
    logo,
    label,
    color,
    size,
    urlToRedirect,
    imageUrl,
    banner,
    button,
    cards,
    images,
    groupCards,
    carousel,
  }: EditLinkUseCaseRequest): Promise<EditLinkUseCaseResponse> {
    const link = await this.linksRepository.findById(id)

    if (!link) {
      return left(new ResourceNotFoundError())
    }

    link.type = type
    link.logo = logo
    link.label = label
    link.color = color
    link.size = size
    link.urlToRedirect = urlToRedirect
    link.imageUrl = imageUrl
    link.banner = banner
    link.button = button
    link.cards = cards
    link.images = images
    link.groupCards = groupCards
    link.carousel = carousel

    await this.linksRepository.update(link)

    return right({
      link,
    })
  }
}
