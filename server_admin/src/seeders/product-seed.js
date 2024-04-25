'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Chèn dữ liệu vào bảng category
    await queryInterface.bulkInsert('Product', [
      {
        category_id: 1,
        title: 'Quan 3 soc nam',
        price: 100,
        discount: 10,
        thumbnail: 'product1.jpg',
        description: 'Description for Product 1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_id: 2,
        title: 'Product 6',
        price: 100,
        discount: 10,
        thumbnail: 'product1.jpg',
        description: 'Description for Product 1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_id: 1,
        title: 'Ao phan dao mua moi',
        price: 100200,
        discount: 99000,
        thumbnail: 'product1.jpg',
        description: 'Description for Product 1',
        created_at: new Date(),
        updated_at: new Date()
      }
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Category', null, {});
  }
};
