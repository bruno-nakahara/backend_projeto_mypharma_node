import {
  create,
  getAll,
  update,
  remove,
  search,
} from '../services/brand.services';

const createBrand = async (req, res) => {
  const { name } = req.body;

  const brand = await create({ name });

  if (brand.message) return res.status(400).json(brand);

  return res.status(201).json(brand);
};

const getBrand = async (req, res) => {
  const { filter } = req.query;
  let brands;

  if (!!filter) {
    brands = await search(filter);
  } else {
    brands = await getAll();
  }

  return res.status(200).json(brands);
};

const updateBrand = async (req, res) => {
  const { id: uuid } = req.params;
  const { name } = req.body;

  const brand = await update({ name, uuid });

  if (brand.message) return res.status(404).json(brand);

  return res.status(200).json(brand);
};

const deleteBrand = async (req, res) => {
  const { id: uuid } = req.params;

  const brand = await remove({ uuid });

  if (brand.message) return res.status(404).json(brand);

  return res.status(200);
};

export { createBrand, getBrand, updateBrand, deleteBrand };
