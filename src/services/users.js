import { UserModel } from '../db/User.js';
import bcrypt from 'bcrypt';

export const findUserByEmail = (email) => UserModel.findOne({ email });

export const createUser = async (payload) => {
  const hasedPassword = await bcrypt.hash(payload.password, 10);

  return UserModel.create({ ...payload, password: hasedPassword });
};
