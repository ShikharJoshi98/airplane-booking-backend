const express = require('express');
const { CityController } = require('../../controllers');
const { CityMiddleware } = require('../../middlewares');

const router = express.Router();

router.post('/create',
    CityMiddleware.validateCreateCity,
    CityController.createCity);

module.exports = router;