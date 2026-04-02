const { STATUS_CODE } = require("../utils/constant")
const AppError = require("../utils/error");
const { errorResponse } = require("../utils/response");

const validateCreateCity = (req, res, next) => {
    if (!req.body || !req.body.name) {       
        return errorResponse(res, new AppError('City Name is required', STATUS_CODE.UNPROCESSABLE_ENTITY),STATUS_CODE.UNPROCESSABLE_ENTITY);
    }
    next();
}

const validateUpdateCity = (req, res, next) => {
    if (!req.body) {
        return errorResponse(
            res,
            new AppError('City body is missing', STATUS_CODE.BAD_REQUEST), STATUS_CODE.BAD_REQUEST
        );
    }
    
    const allowedFields = ['name'];

    const requestFields = Object.keys(req.body);

    const invalidFields = requestFields.filter((field) => (
        !allowedFields.includes(field)
    ));

    if (invalidFields.length > 0) {
        return errorResponse(res,new AppError(`Invalid fields: ${invalidFields.join(', ')}`, STATUS_CODE.UNPROCESSABLE_ENTITY), STATUS_CODE.UNPROCESSABLE_ENTITY);
    }
    if (requestFields.length === 0) {
        return errorResponse(res,new AppError('Name is required', STATUS_CODE.BAD_REQUEST), STATUS_CODE.BAD_REQUEST);
    }
    next();
}

module.exports = {
    validateCreateCity,
    validateUpdateCity
}