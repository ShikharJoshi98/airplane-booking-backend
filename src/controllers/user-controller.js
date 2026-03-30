const { StatusCodes } = require("http-status-codes");
const { userService } = require("../services");
const { successResponse } = require("../utils/response");

//register User
const createUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        return successResponse(res, user, 'New user created', StatusCodes.CREATED);
    } catch (err) {
        next(err);
    }
}

//login user
const loginUser = async (req, res, next) => {
    try {
        const { user, token } = await userService.loginUser(req.body);
        console.log(token);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "Strict",
            maxAge: 24 * 60 * 60 * 1000
        })
        return successResponse(res, user, 'Logged in successfully', StatusCodes.OK);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createUser,
    loginUser
}