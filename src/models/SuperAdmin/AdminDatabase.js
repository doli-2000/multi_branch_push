// src/models/SuperAdmin/AdminDatabase.js
import { DataTypes, Model } from "sequelize";
import superAdminDb from "../../config/db.js";

class AdminDatabase extends Model {}

AdminDatabase.init({
  admin_id: { type: DataTypes.INTEGER, allowNull: false },
  db_name: { type: DataTypes.STRING, allowNull: false },
  db_user: { type: DataTypes.STRING, allowNull: false },
  db_password: { type: DataTypes.STRING, allowNull: false },
  db_host: { type: DataTypes.STRING, defaultValue: "localhost" }
}, {
  sequelize: superAdminDb,
  modelName: "admin_databases",
  timestamps: false
});

export default AdminDatabase;
