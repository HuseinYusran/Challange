'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: 'Baju',
        status: 'ACTIVE',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: 'Celana',
        status: 'ACTIVE',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        name: 'Kemeja',
        status: 'ACTIVE',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        name: 'Sepatu',
        status: 'ACTIVE',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('categories', null, {});
  }
};