const { STATUS_CODE } = require("../utils/constant")
const AppError = require("../utils/error")

const validateCreateAirplane = (req, res, next) => {
    if (!req.body.modelNumber) {
        return errorResponse(res, AppError('Modelnumber is required', STATUS_CODE.UNPROCESSABLE_ENTITY));
    }
    if (!req.body.capacity) {
        return errorResponse(res, AppError('Capacity is required', STATUS_CODE.UNPROCESSABLE_ENTITY));
    }
    next();
}

module.exports = {
    validateCreateAirplane
}