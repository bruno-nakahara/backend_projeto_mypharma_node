import { v4 as newUuid } from 'uuid';
import Product from '../models/product.model';

const create = async ({ name, description, price, stock, category, brand }) => {
  const productExists = await Product.findOne({ name });

  if (productExists) return productExists;

  const product = await Product.create({
    name,
    description,
    uuid: newUuid(),
    price,
    stock,
    category,
    brand,
  });

  return product;
};

const getAll = async () => {
  const products = await Product.find();

  return products;
};

const update = async ({
  name,
  uuid,
  description,
  price,
  stock,
  category,
  brand,
}) => {
  const productExists = await Product.findOne({ uuid });

  if (!productExists) return { message: 'Produto não encontrado!' };

  const productUpdated = await Product.updateOne(
    { uuid },
    { name, uuid, description, price, stock, category, brand }
  );

  return productUpdated;
};

const remove = async ({ uuid }) => {
  const productExists = await Product.findOne({ uuid });

  if (!productExists) return { message: 'Produto não encontrado!' };

  const productDeleted = await Product.deleteOne({ uuid });

  return productDeleted;
};

const search = async filter => {
  const queryWordRegex = new RegExp(filter, 'i');

  const categoriesExists = await Product.find({
    $or: [
      { name: { $regex: queryWordRegex } },
      { description: { $regex: queryWordRegex } },
      { brand: { $regex: queryWordRegex } },
      { category: { $regex: queryWordRegex } },
    ],
  });

  if (!categoriesExists) return { message: 'Produtos não encontrado!' };

  return categoriesExists;
};

export { create, getAll, search, update, remove };
