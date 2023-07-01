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

// export async function getPostById(id) {
//     const client = await pool.connect();
//     const data = pool.query(`SELECT id, user_id FROM posts WHERE id=$1`, [id]);
//     client.release();
//     return data;
//   }