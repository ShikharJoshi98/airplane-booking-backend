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

async function getAllCities(req, res) {
    try {
        const cities = await CityService.getCities();
        return successResponse(res, cities, 'Successfully fetched all cities', STATUS_CODE.OK);
    } catch (error) {
        logger.error('Error in fetching all cities : ', error);
        return errorResponse(res, error, error.statusCode);
    }
}

async function getCity(req, res) {
    try {
        const city = await CityService.getCity(req.params.id);
        return successResponse(res, city, 'Successfully fetched city', STATUS_CODE.OK);
    } catch (error) {
        logger.error('Error in fetching city : ', error);
        return errorResponse(res, error, error.statusCode);
    }
}

async function deleteCity(req, res) {
    try {
        const city = await CityService.deleteCity(req.params.id);
        return successResponse(res, city, 'Successfully deleted city', STATUS_CODE.OK);
    } catch (error) {
        logger.error('Error in deleting city : ', error);
        return errorResponse(res, error, error.statusCode);
    }
}

async function updateCity(req, res) {
    try {
        const city = await CityService.updateCity(req.params.id, req.body);
        return successResponse(res, city, 'Successfully updated city', STATUS_CODE.OK)
    } catch (error) {
        logger.error('Error in updating city : ', error);
        return errorResponse(res, error, error.statusCode);
    }
}

module.exports = {
    createCity,
    getAllCities,
    getCity,
    deleteCity,
    updateCity
}