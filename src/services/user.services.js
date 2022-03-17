import { v4 as newUuid } from 'uuid';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';

const create = async ({ name, email, password }) => {
  const userExists = await User.findOne({ email });

  if (userExists) return userExists;

  const user = await User.create({
    name,
    email,
    password,
    uuid: newUuid(),
  });

  return user;
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email, password });

  return user;
};

const requestLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await login({ email, password });

  if (!user)
    return res.status(401).json({ message: 'email e/ou senha errado!' });

  const { uuid } = user;

  const newToken = jwt.sign(
    {
      userUuid: uuid,
      email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: 72000,
    }
  );

  return res.status(201).json({ token: newToken });
};

export { create, login, requestLogin };
