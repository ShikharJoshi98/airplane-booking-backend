const { StatusCodes } = require("http-status-codes")
const AppError = require("../utils/AppError")

const authorize = (...allowedRoles) => {
    return (req, res, next) => {
        if (!allowedRoles.includes(req.user.role)) {
            return next(new AppError('Forbidden', StatusCodes.FORBIDDEN));
        }
        next();
    }
};

module.exports = authorize;