import createHttpError from 'http-errors';
import {
  createNewProduct,
  deleteProducts,
  getAllContacts,
} from '../services/products.js';
import { isValidObjectId } from 'mongoose';

export const getProductsController = async (req, res) => {
  const products = await getAllContacts();

  res.json(products);
};

export const deleteProductByIDController = async (req, res, next) => {
  const { productId } = req.params;
  if (!isValidObjectId(productId)) {
    next(createHttpError(400, 'Not valid ID'));
    return;
  }

  const response = await deleteProducts(productId);

  if (!response) {
    next(createHttpError(404, 'Product not found'));
    return;
  }
  // res.sendStatus(204);
  res.json(response);
};

export const createNewProductController = async (req, res) => {
  const product = await createNewProduct(req.body);

  res.status(201).json(product);
};
