'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    user_id: DataTypes.INTEGER,
    fullname: DataTypes.STRING(50),
    email: DataTypes.STRING(150),
    phone_number: DataTypes.STRING(20),
    address: DataTypes.STRING(200),
    description: DataTypes.STRING(1000),
    order_date: DataTypes.DATE,
    status: DataTypes.INTEGER,
    total_money: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};