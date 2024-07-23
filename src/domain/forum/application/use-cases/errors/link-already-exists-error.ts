import { UseCaseError } from '@/core/errors/use-case-error'

export class LinkAlreadyExistsError extends Error implements UseCaseError {
  constructor() {
    super(`Link already exists.`)
  }
}