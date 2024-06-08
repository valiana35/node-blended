import { Product } from '../db/Product.js';

export const getAllContacts = () => Product.find();

export const deleteProducts = (productID) =>
  Product.findByIdAndDelete(productID);

export const createNewProduct = (payload) => Product.create(payload);
