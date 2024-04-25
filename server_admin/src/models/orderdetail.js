'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderDetail.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    num: DataTypes.INTEGER,
    total_money: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderDetail',
    tableName: 'OrderDetail',
    timestamps: true,

  });
  return OrderDetail;
};