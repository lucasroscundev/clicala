import { HashGenerator } from '../cryptography/hash-generator'
import { Either, left, right } from '@/core/either'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { LinkType } from '@prisma/client'
import { ButtonLink } from '../../enterprise/entities/buttonLink'
import { ButtonLinksRepository } from '../repositories/button-links-repository'

interface CreateButtonLinkUseCaseRequest {
  linkId: string 
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
    linkId,
    logo,
    label,
    color,
    size,
    urlToRedirect,
  }: CreateButtonLinkUseCaseRequest): Promise<CreateButtonLinkUseCaseResponse> {
    //Search for user in links, then search for the same URL
    /*const userAlreadyHasALink =
       await this.linksrepository.findByUserId(userId)

    const urlAlreadyExists = 
        await this.linksrepository.findByUrl(url)*/
   
    const buttonLink = ButtonLink.create({
    linkId,
    logo,
    label,
    color,
    size,
    urlToRedirect,
    })

    /*if(userAlreadyHasALink && urlAlreadyExists) {
      return left(new LinkAlreadyExistsError())
      console.error(link)      
    }*/

    await this.buttonLinksrepository.create(buttonLink)  
    
    return right({
      buttonLink,
    })
  
  }
}
