import { Product } from '../db/Product.js';

export const getAllContacts = () => Product.find();
