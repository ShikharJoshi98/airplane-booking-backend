const successResponse = (res, data, message, statusCode) => {
    return res
        .status(statusCode || 200)
        .json({
            success: true,
            message: message || 'Successfull',
            data: data || {},
            error: {}
        });
}

const errorResponse = (res, error, statusCode) => {
    return res
        .status(statusCode || 500)
        .json({
            success: false,
            message: error.message || 'Internal Server Error',
            error: error
        });
}

module.exports = {
    successResponse,
    errorResponse
}