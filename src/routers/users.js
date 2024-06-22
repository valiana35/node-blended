import { Router } from 'express';
import { validateBody } from '../utils/validateBody.js';
import { loginSchema, registerSchema } from '../validation/user.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import {
  loginUserController,
  registerUserController,
} from '../controllers/auth.js';

const router = Router();
router.post(
  '/register',
  validateBody(registerSchema),
  ctrlWrapper(registerUserController),
);
router.post(
  '/login',
  validateBody(loginSchema),
  ctrlWrapper(loginUserController),
);
export default router;
