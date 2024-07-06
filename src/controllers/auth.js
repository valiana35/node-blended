import createHttpError from 'http-errors';
import { createUser, findUserByEmail, loginUser } from '../services/users.js';
import bcrypt from 'bcrypt';
import { updateUserWithToken } from '../services/users.js';

export const registerUserController = async (req, res, next) => {
  const user = await findUserByEmail(req.body.email);
  if (user) throw next(createHttpError(409, 'Email already exist'));

  const newUser = await createUser(req.body);

  res.status(201).json({
    user: {
      name: req.body.name,
      email: req.body.email,
    },
    token: newUser.token,
  });
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

  const data = await updateUserWithToken(user._id);

  res.json({
    user: {
      name: data.name,
      email: req.body.email,
    },
    token: data.token,
  });
};
