const { userService } = require("../services");
const { successResponse } = require("../utils/response");

//register User
const createUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        return successResponse(res, user, 'New user created', 201);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createUser
}