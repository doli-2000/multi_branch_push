// src/models/Admin/Product.js
import { DataTypes } from "sequelize";

export const defineProductModel = (adminDb) => {
  return adminDb.define("products", {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    stock: { type: DataTypes.INTEGER, defaultValue: 0 },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, { timestamps: false });
};
