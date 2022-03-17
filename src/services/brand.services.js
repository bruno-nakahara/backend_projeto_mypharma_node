import { v4 as newUuid } from 'uuid';
import Brand from '../models/brand.model';

const create = async ({ name }) => {
  const brandExists = await Brand.findOne({ name });

  if (brandExists) return brandExists;

  const brand = await Brand.create({
    name,
    uuid: newUuid(),
  });

  return brand;
};

const getAll = async () => {
  const brands = await Brand.find();

  return brands;
};

const update = async ({ name, uuid }) => {
  const brandExists = await Brand.findOne({ uuid });

  if (!brandExists) return { message: 'Marca não encontrada!' };

  const brandUpdated = await Brand.updateOne({ uuid }, { name, uuid });

  return brandUpdated;
};

const remove = async ({ uuid }) => {
  const brandExists = await Brand.findOne({ uuid });

  if (!brandExists) return { message: 'Marca não encontrada!' };

  const brandDeleted = await Brand.deleteOne({ uuid });

  return brandDeleted;
};

const search = async filter => {
  const queryWordRegex = new RegExp(filter, 'i');

  const brandsExists = await Brand.find({
    name: { $regex: queryWordRegex },
  });

  if (!brandsExists) return { message: 'Marcas não encontrada!' };

  return brandsExists;
};

export { create, getAll, update, remove, search };
