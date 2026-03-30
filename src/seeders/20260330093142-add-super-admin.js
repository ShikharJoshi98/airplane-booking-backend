'use strict';

const bcrypt = require('bcryptjs');
const { SUPER_ADMIN_USERNAME, SUPER_ADMIN_PASSWORD, SUPER_ADMIN_EMAIL } = require('../config/server-config');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     **/

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(SUPER_ADMIN_PASSWORD, salt);

    await queryInterface.bulkInsert('Users', [{
      username: SUPER_ADMIN_USERNAME,
      password: hashedPassword,
      email: SUPER_ADMIN_EMAIL,
      role: 'superAdmin',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     **/

    await queryInterface.bulkDelete('Users', {
      email: process.env.SUPERADMIN_EMAIL
    });

  }
};
