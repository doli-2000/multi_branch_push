// src/config/db.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const superAdminDb = new Sequelize(
  process.env.SUPER_DB_NAME,
  process.env.SUPER_DB_USER,
  process.env.SUPER_DB_PASSWORD,
  {
    host: process.env.SUPER_DB_HOST,
    dialect: "mysql",
    logging: false,
    pool: { max: 10, min: 0, acquire: 30000, idle: 10000 }
  }
);

export default superAdminDb;
