const Joi = require('joi');

const validateUserSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().optional()
});

module.exports = {
    validateUserSchema
};