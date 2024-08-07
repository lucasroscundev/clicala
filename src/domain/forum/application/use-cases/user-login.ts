import { HashGenerator } from '../cryptography/hash-generator'
import { UsersRepository } from '../repositories/users-repository'
import { User } from '../../enterprise/entities/user'
import { LoginUserDTO, UserDTO } from '@/infra/http/dto/login-user.dto'

interface LoginUserUseCaseRequest {
    email: string
    name: string  
    nickname: string
    picture: string
    emailVerified: boolean
    givenName: string
    familyName: string
    isAuthUser: boolean
    createdAt: Date    
}

export type LoginUserUseCaseResponse =
  {
    user: User
  }


export class LoginUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
  ) {}

  async execute({
    email,
    name,
    nickname,
    picture,
    emailVerified,
    givenName,
    familyName,
    isAuthUser,    
  }: LoginUserDTO): Promise<LoginUserUseCaseResponse> {
    const userAlreadyExists =
       await this.usersRepository.findByEmail(email)

    const user = User.create({
    email,
    name,
    nickname,
    picture,
    emailVerified,
    givenName,
    familyName,
    isAuthUser,     
    }, userAlreadyExists?.id)

    
    if(userAlreadyExists) {
      await this.usersRepository.update(user)      
    } else {
      await this.usersRepository.create(user)
    }    
    
    

    return ({
      user,
    })
  }
}
