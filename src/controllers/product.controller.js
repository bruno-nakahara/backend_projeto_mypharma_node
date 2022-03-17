import {
  create,
  getAll,
  update,
  remove,
  search,
} from '../services/product.services';

const createProduct = async (req, res) => {
  const { name, description, price, stock, category, brand } = req.body;

  const product = await create({
    name,
    description,
    price,
    stock,
    category,
    brand,
  });

  if (product.message) return res.status(400).json(product);

  return res.status(201).json(product);
};

const getProduct = async (req, res) => {
  const { filter } = req.query;
  let products;

  if (!!filter) {
    products = await search(filter);
  } else {
    products = await getAll();
  }

  return res.status(200).json(products);
};

const updateProduct = async (req, res) => {
  const { id: uuid } = req.params;
  const { name, description, price, stock, category, brand } = req.body;

  const product = await update({
    name,
    uuid,
    description,
    price,
    stock,
    category,
    brand,
  });

  if (product.message) return res.status(404).json(product);

  return res.status(200).json(product);
};

const deleteProduct = async (req, res) => {
  const { id: uuid } = req.params;

  const product = await remove({ uuid });

  if (product.message) return res.status(404).json(product);

  return res.status(200).json(product);
};

export { createProduct, getProduct, updateProduct, deleteProduct };
