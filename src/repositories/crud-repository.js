const { logger } = require("../config");

class CrudRepository{
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            logger.error('Error in crud : create');
            throw error;
        }
    }

    async destroy(id) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            logger.error('Error in crud : destroy');
            throw error;
        }
    }

    async get(id) {
        try {
            const response = await this.model.findByPk(id);
            return response;
        } catch (error) {
            logger.error('Error in crud : get');
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            logger.error('Error in crud : getAll');
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await this.model.update(data, {
                where: {
                    id:id
                }
            });
            return response;
        } catch (error) {
            logger.error('Error in crud : update');
            throw error;
        }
    }
}

module.exports = CrudRepository;