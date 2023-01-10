import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config({ path: "./config/.env"});

require('pg').defaults.parseInt8 = true;

const sequelizeConn = new Sequelize(
  `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`
);

export default sequelizeConn;