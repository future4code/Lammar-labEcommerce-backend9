import knex from "knex";
import dotenv from "dotenv"

dotenv.config()

const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true //qnd precisar fazer + de uma query na mesma cxção com o banco
   }
})

export default connection