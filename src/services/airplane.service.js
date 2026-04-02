const { AirplaneRepository } = require("../repositories");
const { STATUS_CODE } = require("../utils/constant");
const AppError = require("../utils/error");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if (error.name == 'TypeError') {           
            throw new AppError(error.message, STATUS_CODE.BAD_REQUEST);
        }
        throw new AppError('Error in creating an airplane', STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('Error in fetching all airplanes', STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id) {
    try {
        const airplane = await airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if (error.statusCode == STATUS_CODE.NOT_FOUND) {
            throw new AppError('The airplane you requested is not present', error.statusCode);
        }
        throw new AppError('Error in fetching airplane', STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

async function deleteAirplane(id) {
    try {
        const airplane = await airplaneRepository.destroy(id);
        return airplane;
    } catch (error) {
        if (error.statusCode == STATUS_CODE.NOT_FOUND) {
            throw new AppError('The airplane you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Error in deleting airplane', STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    deleteAirplane
}