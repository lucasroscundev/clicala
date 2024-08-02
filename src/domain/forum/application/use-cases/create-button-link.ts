import { HashGenerator } from '../cryptography/hash-generator'
import { Either, left, right } from '@/core/either'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { LinkType } from '@prisma/client'
import { ButtonLink } from '../../enterprise/entities/buttonLink'
import { ButtonLinksRepository } from '../repositories/button-links-repository'

interface CreateButtonLinkUseCaseRequest {
  logo: string
  label: string
  color: string
  size: string
  urlToRedirect: string
}

export type CreateButtonLinkUseCaseResponse =  Either<
  null,
  {
    buttonLink: ButtonLink
  } 
>


export class CreateButtonLinkUseCase {
  constructor(
    private buttonLinksrepository: ButtonLinksRepository,
  ) {}

  async execute({
    logo,
    label,
    color,
    size,
    urlToRedirect,
  }: CreateButtonLinkUseCaseRequest): Promise<CreateButtonLinkUseCaseResponse> {
   
    const buttonLink = ButtonLink.create({
    logo,
    label,
    color,
    size,
    urlToRedirect,
    })


    await this.buttonLinksrepository.create(buttonLink)  
    
    return right({
      buttonLink,
    })
  
  }
}
