import Joi from 'joi';

export default {
  createProduct: {
    body: {
      name: Joi.string()
        .trim()
        .max(100)
        .required(),
      description: Joi.string()
        .trim()
        .max(500)
        .required(),
      price: Joi.string()
        .trim()
        .required(),
      category: Joi.string()
        .trim()
        .max(100)
        .required(),
      color: Joi.string()
        .trim()
        .required(),
    },
  },
};
