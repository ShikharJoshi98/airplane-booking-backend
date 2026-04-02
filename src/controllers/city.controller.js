const { logger } = require("../config");
const { CityService } = require("../services");
const { STATUS_CODE } = require("../utils/constant");
const { successResponse, errorResponse } = require("../utils/response");

async function createCity(req, res) {
    try {
        const city = await CityService.addCity({
            name: req.body.name
        });
        return successResponse(res, city, 'Successfully created a city', STATUS_CODE.CREATED);
    } catch (error) {
        logger.error('Error in creating a city : ', error);
        return errorResponse(res, error, error.statusCode);
    }
}

module.exports = {
    createCity
}