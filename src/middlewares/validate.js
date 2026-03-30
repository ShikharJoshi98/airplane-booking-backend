const { StatusCodes } = require("http-status-codes");
const logger = require("../utils/logger");

const validateUser = (schema) => (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({
                success: false,
                message: 'No body Provided'
            });
    }
    const { error, value } = schema.validate(req.body);
    
    if (error) {
        logger.error("User Validation error", error);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({
                success: false,
                message: error.message
            });
    }
    req.validatedData = value;
    next();
};

const validateLogin = (schema) => (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({
                success: false,
                message: 'No body Provided'
            });
    }
    const { error, value } = schema.validate(req.body);
    
    if (error) {
        logger.error("Login Validation error", error);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({
                success: false,
                message: error.message
            });
    }
    req.validatedData = value;
    next();
}

module.exports = {
    validateUser,
    validateLogin
};