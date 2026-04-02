const { CityRepository } = require("../repositories");
const { STATUS_CODE } = require("../utils/constant");
const AppError = require("../utils/error");

const cityRepository = new CityRepository();

async function addCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
         if (error.name == 'TypeError') {           
            throw new AppError(error.message, STATUS_CODE.BAD_REQUEST);
        }
        if (error.name = 'SequelizeUniqueConstraintError') {
            throw new AppError('This city already exists', STATUS_CODE.BAD_REQUEST);
        }
        throw new AppError('Error in creating a city', STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

async function getCities() {
    try {
        const cities = await cityRepository.getAll();
        return cities;
    } catch (error) {
        throw new AppError('Error in fetching all cities', STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

async function getCity(id) {
    try {
        const city = await cityRepository.get(id);
        return city;
    } catch (error) {
        if (error.statusCode == STATUS_CODE.NOT_FOUND) {
            throw new AppError('The city you requested is not present', error.statusCode);
        }
        throw new AppError('Error in fetching city', STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

async function deleteCity(id) {
    try {
        const city = await cityRepository.destroy(id);
        return city;
    } catch (error) {
        if (error.statusCode == STATUS_CODE.NOT_FOUND) {
            throw new AppError('The city you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Error in deleting city', STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(id, data) {
    try {
        const city = await cityRepository.update(id, data);
        return city;
    } catch (error) {
        if (error.statusCode == STATUS_CODE.NOT_FOUND) {
            throw new AppError('The city you requested to update is not present', error.statusCode);
        }
        throw new AppError('Error in updating city', STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    addCity,
    getCities,
    getCity,
    deleteCity,
    updateCity
}