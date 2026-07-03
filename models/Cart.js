const sequelize = require('../config/db'); // Pakai titik dua (../)
const { DataTypes } = require('sequelize');

const Cart = sequelize.define('Cart', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  buyerId: { type: DataTypes.INTEGER, allowNull: false },
  productId: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, defaultValue: 1, validate: { min: 1 } }
}, {
  tableName: 'Carts',
  indexes: [{ unique: true, fields: ['buyerId', 'productId'] }]
});

module.exports = Cart;