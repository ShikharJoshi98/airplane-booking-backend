const logger = require("../utils/logger");

const errorHandler = (err, req, res, next) => {
    logger.error(err.stack);

    return res
        .status(err.status || err.statusCode || 500)
        .json({
            success: false,
            message: err.message || 'Internal Server Error'
        });
}

module.exports = errorHandler;