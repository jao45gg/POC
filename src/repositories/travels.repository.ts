import { Query, QueryResult } from "pg";
import db from "../database/database.connection";
import { newTravel, travel } from "../protocols/travel.protocol";

async function postNewTravel(travel: newTravel) {

    const client = await db.connect();

    try {
        await db.query(`INSERT INTO travels (origin, destiny, shipping_cost) VALUES ($1, $2, $3)`,
            [travel.origin, travel.destiny, travel.shipping_cost]);
    } finally {
        client.release();
    }
}

async function retrieveAllTravels() {

    const client = await db.connect();
    let travels: QueryResult<travel>;

    try {
        travels = await db.query<travel>(`SELECT * FROM travels`);
    } finally {
        client.release();
        return travels.rows;
    }
}

const travelsRepositories = {
    retrieveAllTravels,
    postNewTravel
};

export default travelsRepositories;