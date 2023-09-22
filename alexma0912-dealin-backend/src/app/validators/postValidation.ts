import joi from 'joi';

const postSchemaValidate = joi.object({
  author: joi.string().required(),
  title: joi.string().min(2).max(100).required(),
  content: joi.string().min(2).max(1000).required(),
  image: joi.array().items(joi.string()).required(),
  videoURL: joi.string().empty('').uri().optional(),
  discount: joi.number().required(),
  promotion_end_date: joi.date().required(),
  category: joi.string().required(),
  business_address: joi.string().required(),
  postal_code: joi.string().required(),
  banned: joi.boolean().required(),
});

export default postSchemaValidate;
