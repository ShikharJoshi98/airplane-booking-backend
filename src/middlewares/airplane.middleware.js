const { STATUS_CODE } = require("../utils/constant")
const AppError = require("../utils/error");
const { errorResponse } = require("../utils/response");

const validateCreateAirplane = (req, res, next) => {
    if (!req.body) {
        return errorResponse(
            res,
            new AppError('Request body is missing', STATUS_CODE.BAD_REQUEST),
            STATUS_CODE.BAD_REQUEST
        );
    }
    if (!req.body.modelNumber) {
        return errorResponse(res, new AppError('Modelnumber is required', STATUS_CODE.UNPROCESSABLE_ENTITY), STATUS_CODE.UNPROCESSABLE_ENTITY);
    }
    if (!req.body.capacity) {
        return errorResponse(res, new AppError('Capacity is required', STATUS_CODE.UNPROCESSABLE_ENTITY), STATUS_CODE.UNPROCESSABLE_ENTITY);
    }
    next();
}

const validateUpdateAirplane = (req, res, next) => {
    if (!req.body) {
        return errorResponse(
            res,
            new AppError('Request body is missing', STATUS_CODE.BAD_REQUEST), STATUS_CODE.BAD_REQUEST
        );
    }
    
    const allowedFields = ['modelNumber', 'capacity'];

    const requestFields = Object.keys(req.body);

    const invalidFields = requestFields.filter((field) => (
        !allowedFields.includes(field)
    ));

    if (invalidFields.length > 0) {
        return errorResponse(res,new AppError(`Invalid fields: ${invalidFields.join(', ')}`, STATUS_CODE.UNPROCESSABLE_ENTITY), STATUS_CODE.UNPROCESSABLE_ENTITY);
    }
    if (requestFields.length === 0) {
        return errorResponse(res,new AppError('At least one field (modelNumber or capacity) is required', STATUS_CODE.BAD_REQUEST), STATUS_CODE.BAD_REQUEST);
    }
    next();
}

module.exports = {
    validateCreateAirplane,
    validateUpdateAirplane
}