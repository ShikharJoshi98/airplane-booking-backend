const express = require('express');
const { CityController } = require('../../controllers');
const { CityMiddleware } = require('../../middlewares');

const router = express.Router();

router.post('/create',
    CityMiddleware.validateCreateCity,
    CityController.createCity
);

router.get('/getCities',
    CityController.getAllCities
)

router.get('/getCity/:id',
    CityController.getCity
)

router.delete('/deleteCity/:id',
    CityController.deleteCity
)

router.patch('/updateCity/:id',
    CityMiddleware.validateUpdateCity,
    CityController.updateCity
);

module.exports = router;