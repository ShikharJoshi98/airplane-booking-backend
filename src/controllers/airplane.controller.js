const { logger } = require("../config");
const { AirplaneService } = require("../services");
const { STATUS_CODE } = require("../utils/constant");
const { successResponse, errorResponse } = require("../utils/response");

async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return successResponse(res, airplane, 'Successfully created an airplane', STATUS_CODE.CREATED);
    } catch (error) {
        logger.error('Error in creating an airplane : ', error);
        return errorResponse(res, error, error.statusCode);
    }
}

async function getAllAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        return successResponse(res, airplanes, 'Successfully fetched all airplanes', STATUS_CODE.OK);
    } catch (error) {
        logger.error('Error in fetching all airplanes : ', error);
        return errorResponse(res, error, error.statusCode);
    }
}

async function getAirplane(req, res) {
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        return successResponse(res, airplane, 'Successfully fetched airplane', STATUS_CODE.OK);
    } catch (error) {
        logger.error('Error in fetching airplane : ', error);
        return errorResponse(res, error, error.statusCode);
    }
}

async function deleteAirplane(req, res) {
    try {
        const airplane = await AirplaneService.deleteAirplane(req.params.id);
        return successResponse(res, airplane, 'Successfully deleted airplane', STATUS_CODE.OK)
    } catch (error) {
        logger.error('Error in deleting airplane : ', error);
        return errorResponse(res, error, error.statusCode);
    }
}

module.exports = {
    createAirplane,
    getAllAirplanes,
    getAirplane,
    deleteAirplane
}