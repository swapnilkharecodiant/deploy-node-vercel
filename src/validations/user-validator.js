import Joi from 'joi';

const userProfileUpdateSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(20)
    .messages({
      'any.required': 'NAME_REQUIRED',
      'string.empty': 'NAME_REQUIRED',
      'string.min': 'NAME_MIN_VALIDATION',
      'string.max': 'NAME_MAX_VALIDATION',
    })
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: false } })
    .min(6)
    .max(50)
    .messages({
      'any.required': 'EMAIL_REQUIRED',
      'string.empty': 'EMAIL_REQUIRED', 
      'string.email': 'VALID_EMAIL_ALLOWED',
      'string.min': 'EMAIL_MIN_VALIDATION',
      'string.max': 'EMAIL_MAX_VALIDATION',
    })
    .required(),
  phone_number: Joi.string() 
    .regex(/^\d{10}$/) // Validates if the phone number is exactly 10 digits
    .required()
    .messages({
      'any.required': 'PHONE_NUMBER_REQUIRED',
      'string.empty': 'PHONE_NUMBER_REQUIRED',
      'string.pattern.base': 'PHONE_NUMBER_INVALID'
    }),
});

export default {
  userProfileUpdateSchema,
};
