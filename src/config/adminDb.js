// src/config/adminDb.js
import { Sequelize } from "sequelize";
// Function to create a Sequelize instance for the Admin DB
export const getAdminDb = (dbConfig) => {
  const { db_name, db_user, db_password, db_host } = dbConfig;
  console.log(`Connecting to Admin DB: ${db_name} at ${db_host}`);
  return new Sequelize(db_name, db_user, db_password, {
    host: db_host || "localhost",
    dialect: "mysql",
    logging: false,
    pool: { max: 10, min: 0, acquire: 30000, idle: 10000 }
  });
};
