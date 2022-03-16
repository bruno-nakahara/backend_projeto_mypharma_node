import { create } from '../services/user.services';

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await create({ name, email, password });

  return res.status(200).json(user);
};

export { createUser };
