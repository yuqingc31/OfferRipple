import joi from 'joi';

const fileNameValidator = joi.object({
  originalName: joi
    .string()
    .regex(/\.jpg|\.jpeg|\.png$/)
    .required(),
});

export default fileNameValidator;
