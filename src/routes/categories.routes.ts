import { Router } from 'express'
import { CategoryRepository } from '../repositories/CategoriesRepository'
import { CreateCategoryService } from '../services/CreateCategoryService'

export const categoriesRoutes = Router()
const categoryRepository = new CategoryRepository()

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const createCategoryService = new CreateCategoryService(categoryRepository)

  createCategoryService.execute({ name, description })

  return response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
  const all = categoryRepository.list()

  return response.json(all)
})
