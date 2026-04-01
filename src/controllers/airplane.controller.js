const { AirplaneService } = require("../services");
const { STATUS_CODE } = require("../utils/constant");

async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res
            .status(STATUS_CODE.CREATED)
            .json({
                success: true,
                message: "Successfully created a plane",
                data: airplane,
                error: {}
            });
    } catch (error) {
        return res
            .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
            .json({
                success: false,
                message: "Error in creating a plane",
                data: {},
                error: error
            });
    }
}

module.exports = {
    createAirplane
}