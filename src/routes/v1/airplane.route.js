const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddleware } = require('../../middlewares');

const router = express.Router();

router.post('/create',
    AirplaneMiddleware.validateCreateAirplane,
    AirplaneController.createAirplane);

router.get('/getAirplanes',
    AirplaneController.getAllAirplanes
)

router.get('/getAirplane/:id',
    AirplaneController.getAirplane
)

router.delete('/deleteAirplane/:id',
    AirplaneController.deleteAirplane
)

module.exports = router;