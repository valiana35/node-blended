import {
  createNewProductController,
  deleteProductByIDController,
  getProductsController,
} from '../controllers/products.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import { Router } from 'express';

const router = Router();

router.get('/', ctrlWrapper(getProductsController));

router.delete('/:productId', ctrlWrapper(deleteProductByIDController));

router.post('/', ctrlWrapper(createNewProductController));

export default router;
