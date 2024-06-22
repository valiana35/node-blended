import { UserModel } from '../db/User.js';
import bcrypt from 'bcrypt';
import { SessionModel } from '../db/Session.js';
import { randomBytes } from 'crypto';

export const findUserByEmail = (email) => UserModel.findOne({ email });

export const createUser = async (payload) => {
  const hasedPassword = await bcrypt.hash(payload.password, 10);

  return UserModel.create({ ...payload, password: hasedPassword });
};

export const loginUser = async (userId) => {
  await SessionModel.deleteOne({ userId });

  const accessToken = randomBytes(30).toString('base64');
  const refreshToken = randomBytes(30).toString('base64');

  const newSession = SessionModel.create({
    userId,
    accessToken,
    refreshToken,
    accessTokenValidUntil: Date.now() + 1000 * 60 * 15,
    refreshTokenValidUntil: Date.now() + 1000 * 60 * 60 * 24 * 7,
  });

  return newSession;
};
