import express from 'express';
import {
  createBrand,
  getBrand,
  updateBrand,
  deleteBrand,
} from '../controllers/brand.controller';
import {
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from '../controllers/category.controller';
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from '../controllers/product.controller';
import { createUser } from '../controllers/user.controller';
import VerifyToken from '../middlewares/user.middlewares';
import { requestLogin } from '../services/user.services';

const routes = express.Router();

//User
routes.post('/user', createUser);
routes.get('/login', requestLogin);

//Brand
routes.post('/brand', VerifyToken, createBrand);
routes.get('/brand', VerifyToken, getBrand);
routes.put('/brand/:id', VerifyToken, updateBrand);
routes.delete('/brand/:id', VerifyToken, deleteBrand);

//Category
routes.post('/category', VerifyToken, createCategory);
routes.get('/category', VerifyToken, getCategory);
routes.put('/category/:id', VerifyToken, updateCategory);
routes.delete('/category/:id', VerifyToken, deleteCategory);

//Product
routes.post('/product', VerifyToken, createProduct);
routes.get('/product', VerifyToken, getProduct);
routes.put('/product/:id', VerifyToken, updateProduct);
routes.delete('/product/:id', VerifyToken, deleteProduct);

module.exports = routes;
