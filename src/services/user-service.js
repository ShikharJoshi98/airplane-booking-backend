const { UserRepository } = require("../repositories");
const logger = require("../utils/logger");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/AppError");
const { generateToken } = require("../utils/generateToken");

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

async function loginUser(data) {
    try {
        const user = await userRepository.findByEmail(data.email);
        if (!user) {
            throw new AppError('User does not exist', StatusCodes.UNAUTHORIZED);
        }
        
        const isPassword = await user.checkPassword(data.password);
        if (!isPassword) {
            throw new AppError('Invalid Credentials', StatusCodes.UNAUTHORIZED);
        }
        const token = await generateToken(user.id, user.role);
        
        return {token, user};
    } catch (error) {
        logger.error("error in login User Service", error);
        throw error;
    }
}

async function name(params) {
    
}

module.exports = {
    createUser,
    loginUser
}