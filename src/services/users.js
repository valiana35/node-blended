import { UserModel } from '../db/User.js';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { env } from '../utils/env.js';

export const findUserByEmail = (email) => UserModel.findOne({ email });

const updateUserWithToken = (userId) => {
  const token = jsonwebtoken.sign({ id: userId }, env('JWT_SECRET'));

  const userWithToken = UserModel.findByIdAndUpdate(
    userId,
    { token },
    { new: true },
  );
  return userWithToken;
};

export const createUser = async (userData) => {
  const cryptPassword = await bcrypt.hash(userData.password, 10);
  const newUser = await UserModel.create({
    ...userData,
    password: cryptPassword,
  });

  return updateUserWithToken(newUser._id);
};

export const loginUser = async (userId) => {};
