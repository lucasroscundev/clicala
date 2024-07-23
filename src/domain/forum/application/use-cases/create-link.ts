import { HashGenerator } from '../cryptography/hash-generator'
import { Link } from '../../enterprise/entities/link'
import { LinksRepository } from '../repositories/links-repository'
import { link } from 'fs'
import { Either, left, right } from '@/core/either'
import { LinkAlreadyExistsError } from './errors/link-already-exists-error'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { error } from 'console'

interface CreateLinkUseCaseRequest {
    url: string
    description: string
    userId: string
    type: string
    size: string 
    createdAt: Date
}

export type CreateLinkUseCaseResponse =  Either<
  LinkAlreadyExistsError,
  {
    link: Link
  } 
>


export class CreateLinkUseCase {
  constructor(
    private linksrepository: LinksRepository,
  ) {}

  async execute({
    url,
    description,
    userId,
    type,
    size,
    createdAt,
  }: CreateLinkUseCaseRequest): Promise<CreateLinkUseCaseResponse> {
    //Search for user in links, then search for the same URL
    /*const userAlreadyHasALink =
       await this.linksrepository.findByUserId(userId)

    const urlAlreadyExists = 
        await this.linksrepository.findByUrl(url)*/
   
    const link = Link.create({
    url,
    description,
    userId,
    type,
    size,
    createdAt,
    })

    /*if(userAlreadyHasALink && urlAlreadyExists) {
      return left(new LinkAlreadyExistsError())
      console.error(link)      
    }*/

    await this.linksrepository.create(link)  
    
    return right({
      link,
    })
  
  }
}
