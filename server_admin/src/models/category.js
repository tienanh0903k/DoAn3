'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
/**
     * Phương pháp trợ giúp để xác định liên kết.
     * Phương pháp này không phải là một phần của vòng đời Sequelize.
     * Tệp `models/index` sẽ tự động gọi phương thức này.
     */
    static associate(models) {
      this.hasMany(models.Product, { foreignKey: 'id', target: '' });
    }
  }
  Category.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'Category', 
    timestamps: false, 
    underscored: true 
  });
  return Category;
};

