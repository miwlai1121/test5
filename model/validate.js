const Joi = require('joi');
const validateScheme = Joi.object({
  name: Joi.string().min(5).max(50).required(),
  password: Joi.string().min(5).max(255).required()
})

module.exports = validateScheme;
