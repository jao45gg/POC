import pg from "pg";
import { config } from "dotenv";

const { Pool } = pg;
config();

const configDatabase = {
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.MODE === "prod",
};

const db = new Pool(configDatabase);

db.connect()
    .then(client => {
        console.log("Connected to PostgreSQL database");
        client.release();
    })
    .catch(err => {
        console.error(err);
    });

export default db;