'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('setTimes', {
      stage_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      band_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      start_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      set_time_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('setTimes');
  }
};