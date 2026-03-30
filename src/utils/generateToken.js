const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/server-config');
const AppError = require('./AppError');
const { StatusCodes } = require('http-status-codes');

async function generateToken(id, role) {
    try {
        const token = jwt.sign(
            {
                id,
                role
            },
            JWT_SECRET,
            { expiresIn: '7d' }
        )
        return token;
    } catch (error) {
        throw new AppError('Error in creating token', StatusCodes.BAD_REQUEST);
    }
};

module.exports = {
    generateToken
}