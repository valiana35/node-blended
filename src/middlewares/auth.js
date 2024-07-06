import createHttpError from 'http-errors';
import { UserModel } from '../db/User.js';
import jwt from 'jsonwebtoken';

const checktoken = async (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    next(createHttpError(401, 'Please provide Authorization header'));
    return;
  }

  const [bearer, token] = authHeader.split(' ');

  if (bearer !== 'Bearer' || !token) {
    next(createHttpError(401, 'Auth header should be of type Bearer'));
    return;
  }

  const { id } = jwt.verify(token, JWT_SECRET);

  const user = await UserModel.findById(id);
  if (!user || !user.token || user.token !== token) {
    next(createHttpError(401, 'No autorize'));
  }
  req.user = user;
  next();
};
