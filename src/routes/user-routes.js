const express = require('express');

const { userController } = require('../controllers');
const validate = require('../middlewares/validate');
const { validateUserSchema, loginValidation } = require('../utils/validation');

const router = express.Router();

//create a user
router.post('/createUser', validate.validateUser(validateUserSchema), userController.createUser);

//login a user
router.post('/login', validate.validateLogin(loginValidation), userController.loginUser);

module.exports = router;
