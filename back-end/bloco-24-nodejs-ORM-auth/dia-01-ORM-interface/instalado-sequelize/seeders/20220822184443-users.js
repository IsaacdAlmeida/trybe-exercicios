'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        full_name: 'Isaac',
        email: 'isaaco@test.com',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        update_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        full_name: 'Almeida',
        email: 'almeida@test.com',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        update_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {}),

    down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
    
  };