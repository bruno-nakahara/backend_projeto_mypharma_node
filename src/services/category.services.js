import { v4 as newUuid } from 'uuid';
import Category from '../models/category.model';

const create = async ({ name, description }) => {
  const categoryExists = await Category.findOne({ name });

  if (categoryExists) return categoryExists;

  const category = await Category.create({
    name,
    description,
    uuid: newUuid(),
  });

  return category;
};

const getAll = async () => {
  const categories = await Category.find();

  return categories;
};

const update = async ({ name, uuid, description }) => {
  const categoryExists = await Category.findOne({ uuid });

  if (!categoryExists) return { message: 'Categoria não encontrada!' };

  const categoryUpdated = await Category.updateOne(
    { uuid },
    { name, uuid, description }
  );

  return categoryUpdated;
};

const remove = async ({ uuid }) => {
  const categoryExists = await Category.findOne({ uuid });

  if (!categoryExists) return { message: 'Categoria não encontrada!' };

  const categoryDeleted = await Category.deleteOne({ uuid });

  return categoryDeleted;
};

const search = async filter => {
  const queryWordRegex = new RegExp(filter, 'i');

  const categoriesExists = await Category.find({
    $or: [
      { name: { $regex: queryWordRegex } },
      { description: { $regex: queryWordRegex } },
    ],
  });

  if (!categoriesExists) return { message: 'Categorias não encontrada!' };

  return categoriesExists;
};

export { create, getAll, update, remove, search };
