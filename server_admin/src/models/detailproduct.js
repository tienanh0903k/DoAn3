'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DetailProduct extends Model {
    static associate(models) {
      DetailProduct.belongsTo(models.Product, { foreignKey: 'product_id' });    
    }
  };
  DetailProduct.init({
    product_id: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING(500),
    color: DataTypes.STRING(10),
  }, {
    sequelize,
    modelName: 'DetailProduct',
    tableName: 'DetailProduct',
    timestamps: true 
  });
  return DetailProduct;
};
