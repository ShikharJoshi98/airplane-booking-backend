const dotenv = require('dotenv');

dotenv.config({
    path: require('path').resolve(__dirname, '../../.env')
});

module.exports = {
    PORT: process.env.PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_HOST: process.env.DB_HOST,
    SUPER_ADMIN_USERNAME: process.env.SUPER_ADMIN_USERNAME,
    SUPER_ADMIN_EMAIL: process.env.SUPER_ADMIN_EMAIL,
    SUPER_ADMIN_PASSWORD: process.env.SUPER_ADMIN_PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET
};