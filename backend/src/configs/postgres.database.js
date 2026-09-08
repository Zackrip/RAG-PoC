import { Sequelize } from "sequelize";
// import pg from "pg";
import dotenv from "dotenv";

dotenv.config({quiet: true});

// const { Pool } = pg;

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: console.log,
  },
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected ✅");
  } catch (error) {
    console.error("PostgreSQL connection failed ❌", error.message);
  }
};

export { sequelize, connectDB };
