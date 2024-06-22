import { Router } from 'express';
import { validateBody } from '../utils/validateBody.js';
import { registerSchema } from '../validation/register.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import { registerUserController } from '../controllers/auth.js';

const router = Router();
router.post(
  '/register',
  validateBody(registerSchema),
  ctrlWrapper(registerUserController),
);
export default router;
