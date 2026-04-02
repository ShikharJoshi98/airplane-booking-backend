'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     **/

    await queryInterface.changeColumn('Cities', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     **/
    await queryInterface.changeColumn('Cities', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });

  }
};
