import {
  createBrand,
  getBrand,
  updateBrand,
  deleteBrand,
} from '../controllers/brand.controller';
import VerifyToken from '../middlewares/user.middlewares';
import express from 'express';

const routes = express.Router();

routes.post('/', VerifyToken, createBrand);
routes.get('/', VerifyToken, getBrand);
routes.put('/:id', VerifyToken, updateBrand);
routes.delete('/:id', VerifyToken, deleteBrand);

module.exports = routes;
