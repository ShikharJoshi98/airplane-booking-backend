const { STATUS_CODE } = require("../utils/constant")
const AppError = require("../utils/error");
const { errorResponse } = require("../utils/response");

const validateCreateCity = (req, res, next) => {
    if (!req.body || !req.body.name) {       
        return errorResponse(res, new AppError('City Name is required', STATUS_CODE.UNPROCESSABLE_ENTITY));
    }
    next();
}

module.exports = {
    validateCreateCity
}