import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { User } from '@/domain/forum/enterprise/entities/user'
import { LoggedUserDTO, UserDTO } from '@/infra/http/dto/login-user.dto'
import { User as PrismaUser, Prisma } from '@prisma/client'

export class PrismaUserMapper {
  static toDomain(raw: PrismaUser): User {
    return User.create(
      {
        email: raw.email,
        name: raw.name,
        nickname: raw.nickname,
        picture: raw.picture || "",
        emailVerified: raw.emailVerified,
        givenName: raw.givenName,
        familyName: raw.familyName,
        isAuthUser: raw.isAuthUser,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,        
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(user: User): Prisma.UserUncheckedCreateInput {
    return {
      id: user.id.toString(),
      email: user.email,
      name: user.name,
      nickname: user.nickname,
      picture: user.picture || "",
      emailVerified: user.emailVerified,
      givenName: user.givenName,
      familyName: user.familyName,
      isAuthUser: user.isAuthUser,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt, 
    }
  }

  static toHTTP(response: {user: User}): LoggedUserDTO {
    return {
      id: response.user.id.toString(),
      email: response.user.email,
      name: response.user.name,
      nickname: response.user.nickname,
      picture: response.user.picture || "",
      emailVerified: response.user.emailVerified,
      givenName: response.user.givenName,
      familyName: response.user.familyName,
      isAuthUser: response.user.isAuthUser,
      /*createdAt: response.user.createdAt,
      updatedAt: response.user.updatedAt || response.user.createdAt,*/
    }
  }
}