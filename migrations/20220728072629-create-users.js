'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'users',
      { 
        user_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.TEXT
        },
        password: {
          type: Sequelize.STRING
        },
        address: {
          type: Sequelize.STRING
        },
        phone: {
          type: Sequelize.STRING
        },
        created_at: {
          type: Sequelize.DATE,
          default: new Date()
        },
        updated_at: {
          type: Sequelize.DATE,
          default: new Date()
        },
        deleted_at: {
          type: Sequelize.DATE
        },
      },
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};