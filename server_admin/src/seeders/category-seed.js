'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Chèn dữ liệu vào bảng category
    await queryInterface.bulkInsert('Category', [
      {
        name: 'Ao',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Quan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Category', null, {});
  }
};
