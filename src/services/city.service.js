const { CityRepository } = require("../repositories");
const { STATUS_CODE } = require("../utils/constant");
const AppError = require("../utils/error");

const cityRepository = new CityRepository();

async function addCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        // console.log(error);
         if (error.name == 'TypeError') {           
            throw new AppError(error.message, STATUS_CODE.BAD_REQUEST);
        }
        if (error.name = 'SequelizeUniqueConstraintError') {
            throw new AppError('This city already exists', STATUS_CODE.BAD_REQUEST);
        }
        throw new AppError('Error in creating a city', STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    addCity
}