import {
  createNewProductController,
  deleteProductByIDController,
  getProductsController,
} from '../controllers/products.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import { Router } from 'express';
import { validateBody } from '../utils/validateBody.js';
import { productsSchema } from '../validation/products.js';

const router = Router();

router.get('/', ctrlWrapper(getProductsController));

router.delete('/:productId', ctrlWrapper(deleteProductByIDController));

router.post(
  '/',
  validateBody(productsSchema),
  ctrlWrapper(createNewProductController),
);

export default router;
