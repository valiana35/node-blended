import { getAllContacts } from '../services/products.js';

export const getProductsController = async (req, res) => {
  const products = await getAllContacts();

  res.json(products);
};
