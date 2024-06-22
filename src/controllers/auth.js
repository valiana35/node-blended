import createHttpError from 'http-errors';
import { createUser, findUserByEmail } from '../services/users.js';

export const registerUserController = async (req, res, next) => {
  const user = await findUserByEmail(req.body.email);
  if (user) throw next(createHttpError(409, 'Email already exist'));

  const newUser = await createUser(req.body);
  res.status(201).json({
    data: {
      name: newUser.name,
      email: newUser.email,
    },
  });
};
