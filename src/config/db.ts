import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'
//dotenv
dotenv.config()

const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
    host: process.env.BD_HOST,
    dialect: 'postgres',
    models: [__dirname + '/../models/**/*.ts'],
    logging: false
  });

  export default db