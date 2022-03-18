import express from 'express';
import { createUser } from '../controllers/user.controller';
import { requestLogin } from '../services/user.services';
import product from './product';
import brand from './brand';
import category from './category';

const routes = express.Router();

//User
routes.post('/user', createUser);
routes.post('/login', requestLogin);

routes.use('/brand', brand);
routes.use('/category', category);
routes.use('/product', product);

module.exports = routes;
