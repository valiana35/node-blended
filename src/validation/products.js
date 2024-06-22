import Joi from 'joi';

export const productsSchema = Joi.object({
  name: Joi.string().required().min(3),
  price: Joi.number().required(),
  category: Joi.string().valid('books', 'electronics', 'clothing', 'other'),
  description: Joi.string(),
});
