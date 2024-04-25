'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImportInvoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ImportInvoice.init({
    supplier_id: DataTypes.INTEGER,
    order_date: DataTypes.DATE,
    status: DataTypes.INTEGER,
    total_money: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ImportInvoice',
    tableName: 'ImportInvoice',
    timestamps: true,

  });
  return ImportInvoice;
};