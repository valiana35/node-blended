import createHttpError from 'http-errors';
import { createUser, findUserByEmail, loginUser } from '../services/users.js';
import bcrypt from 'bcrypt';

export const registerUserController = async (req, res, next) => {
  const user = await findUserByEmail(req.body.email);
  if (user) throw next(createHttpError(409, 'Email already exist'));

  const newUser = createUser(req.body);
};

export const loginUserController = async (req, res, next) => {
  const user = await findUserByEmail(req.body.email);
  if (!user) throw next(createHttpError(401, 'Logged in not success'));

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password,
  );
  if (!isPasswordValid)
    throw next(createHttpError(401, 'Logged in not success'));
};
