import { LinksRepository } from "@/domain/forum/application/repositories/links-repository"
import { CreateLinkUseCase } from "@/domain/forum/application/use-cases/create-link"
import { Injectable } from "@nestjs/common"

@Injectable()
export class NestCreateLinkUseCase extends CreateLinkUseCase {
  constructor(linksRepository: LinksRepository) {
    super(linksRepository)
  }
}
