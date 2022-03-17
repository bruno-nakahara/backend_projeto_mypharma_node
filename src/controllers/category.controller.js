import {
  create,
  getAll,
  update,
  remove,
  search,
} from '../services/category.services';

const createCategory = async (req, res) => {
  const { name, description } = req.body;

  const category = await create({ name, description });

  if (category.message) return res.status(400).json(category);

  return res.status(201).json(category);
};

const getCategory = async (req, res) => {
  const { filter } = req.query;
  let categories;

  if (!!filter) {
    categories = await search(filter);
  } else {
    categories = await getAll();
  }

  return res.status(200).json(categories);
};

const updateCategory = async (req, res) => {
  const { id: uuid } = req.params;
  const { name, description } = req.body;

  const category = await update({ name, uuid, description });

  if (category.message) return res.status(404).json(category);

  return res.status(200).json(category);
};

const deleteCategory = async (req, res) => {
  const { id: uuid } = req.params;

  const category = await remove({ uuid });

  if (category.message) return res.status(404).json(category);

  return res.status(200).json(category);
};

export { createCategory, getCategory, updateCategory, deleteCategory };
