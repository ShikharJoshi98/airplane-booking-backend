const Joi = require('joi');

const validateUserSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().optional()
});

const loginValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
})

module.exports = {
    validateUserSchema,
    loginValidation
};