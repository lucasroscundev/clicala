import { InMemoryUsersRepository } from 'test/repositories/in-memory-users-repository'
import { FakeHasher } from 'test/cryptography/fake-hasher'
import { makeUser } from 'test/factories/make-user'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { User } from '../../enterprise/entities/user'
import { LoginUserUseCase } from './user-login'

let inMemoryUsersRepository: InMemoryUsersRepository

let fakeHasher: FakeHasher
let sut: LoginUserUseCase

describe('Create User', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()

    sut = new LoginUserUseCase(inMemoryUsersRepository)
  })

  it('should be able to create a user', async () => {
    const newUser = makeUser(
      /*{
        email: 'example@mail.com',
      }, new UniqueEntityID('user-test'),*/
    )

    await inMemoryUsersRepository.create(newUser)

    expect(inMemoryUsersRepository.items[0]).toEqual(newUser)
  })
})
