import { CategoryRepository } from '../repositories/CategoriesRepository'

interface IRequest {
  name: string
  description: string
}

export class CreateCategoryService {
  constructor(private categoriesRepository: CategoryRepository) {}

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('Category already exists')
    }

    this.categoriesRepository.create({ name, description })
  }
}
