'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Supplier.hasMany(models.ImportInvoice, { foreignKey: 'supplier_id' });
    }
  }
  Supplier.init({
    name: DataTypes.STRING(100),
    email: DataTypes.STRING(150),
    phone_number: DataTypes.STRING(20),
    address: DataTypes.STRING(200)
  }, {
    sequelize,
    modelName: 'Supplier',
    tableName: 'Supplier',
    timestamps: true 
  });
  return Supplier;
};