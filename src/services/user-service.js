const { UniqueConstraintError } = require("sequelize");
const { UserRepository } = require("../repositories");
const logger = require("../utils/logger");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/AppError");

const userRepository = new UserRepository();

async function createUser(data) {
    try {
        const response = await userRepository.create(data);
        return response;
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            throw new AppError('This user already exists', StatusCodes.BAD_REQUEST);
        }
        logger.error("error in create User Service", error);
        throw error;
    }
}

module.exports = {
    createUser
}