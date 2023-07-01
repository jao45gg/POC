import { newTravel, updateTravel } from "../protocols/travel.protocol";
import travelsRepositories from "../repositories/travels.repository";

async function insertNewTravel(travel: newTravel) {
    await travelsRepositories.postNewTravel(travel);
}

async function getAllTravels() {
    return await travelsRepositories.retrieveAllTravels();
}

async function modifyTravel(travelId: number, updatedTravel: updateTravel) {

    if (isNaN(travelId))
        throw { message: "Invalid travel id" };

    const setFields = Object.keys(updatedTravel).map((key, index) => `${key} = $${index + 1}`).join(', ');
    const setValues = Object.values(updatedTravel);
    setValues.push(travelId);

    await travelsRepositories.ChangeTravel(setFields, setValues);
}

const travelsServices = {
    getAllTravels,
    insertNewTravel,
    modifyTravel
};

export default travelsServices;