const express = require('express');

const { userController } = require('../controllers');
const validate = require('../middlewares/validate');
const { validateUserSchema } = require('../utils/validation');

const router = express.Router();

//create a user
router.post('/createUser',validate(validateUserSchema), userController.createUser);

module.exports = router;
