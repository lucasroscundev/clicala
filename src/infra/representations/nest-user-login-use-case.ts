import { UsersRepository } from "@/domain/forum/application/repositories/users-repository"
import { LoginUserUseCase } from "@/domain/forum/application/use-cases/user-login"
import { Injectable } from "@nestjs/common"

@Injectable()
export class NestLoginUserUseCase extends LoginUserUseCase {
  constructor(usersRepository: UsersRepository) {
    super(usersRepository)
  }
}
