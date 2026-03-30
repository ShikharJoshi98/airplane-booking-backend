const jwt = require('jsonwebtoken');
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/AppError");
const { JWT_SECRET } = require('../config/server-config');

const authenticate = (req, res, next) => {  
    try {
        const token = req.cookies.token;
        if (!token) {
        return next(new AppError('Token missing', StatusCodes.UNAUTHORIZED));
    }
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        next(new AppError('Invalid Token', StatusCodes.UNAUTHORIZED))
    }
};

module.exports = authenticate;
