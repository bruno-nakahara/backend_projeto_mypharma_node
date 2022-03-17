import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from '../controllers/product.controller';
import VerifyToken from '../middlewares/user.middlewares';
import express from 'express';

const routes = express.Router();

routes.post('/', VerifyToken, createProduct);
routes.get('/', VerifyToken, getProduct);
routes.put('/:id', VerifyToken, updateProduct);
routes.delete('/:id', VerifyToken, deleteProduct);

module.exports = routes;
