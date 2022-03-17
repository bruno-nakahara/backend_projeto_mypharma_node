import {
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from '../controllers/category.controller';
import VerifyToken from '../middlewares/user.middlewares';
import express from 'express';

const routes = express.Router();

routes.post('/', VerifyToken, createCategory);
routes.get('/', VerifyToken, getCategory);
routes.put('/:id', VerifyToken, updateCategory);
routes.delete('/:id', VerifyToken, deleteCategory);

module.exports = routes;
