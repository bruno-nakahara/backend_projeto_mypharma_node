import express from 'express';
import { createUser } from '../controllers/user.controller';
import VerifyToken from '../middlewares/user.middlewares';
import { requestLogin } from '../services/user.services';

const routes = express.Router();

routes.post('/user', createUser);

routes.get('/login', requestLogin);

module.exports = routes;
