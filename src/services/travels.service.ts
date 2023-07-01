import { newTravel } from "../protocols/travel.protocol";
import travelsRepositories from "../repositories/travels.repository";

async function insertNewTravel(travel: newTravel) {
   await travelsRepositories.postNewTravel(travel);
}

async function getAllTravels() {
    return await travelsRepositories.retrieveAllTravels();
}

const travelsServices = {
    getAllTravels,
    insertNewTravel
};

export default travelsServices;