import db from "../database/database.connection";
import { travel } from "../protocols/travel.protocol";

async function retrieveAllTravels() {
    const travels = await db.query<travel>(`SELECT * FROM travels`);
    return travels.rows;
}

const travelsRepositories = {
    retrieveAllTravels
};

export default travelsRepositories;