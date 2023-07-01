import { invalidId } from "../errors/invalidId.error";
import { newTravel, updateTravel } from "../protocols/travel.protocol";
import travelsRepositories from "../repositories/travels.repository";

async function insertNewTravel(travel: newTravel) {
    await travelsRepositories.postNewTravel(travel);
}

async function getAllTravels() {
    return await travelsRepositories.retrieveAllTravels();
}

async function modifyTravel(travelId: number, updatedTravel: updateTravel) {

    const travelExist = await travelsRepositories.findTravelById(travelId);

    if (isNaN(travelId) || travelExist <= 0)
        throw invalidId();

    const setFields = Object.keys(updatedTravel).map((key, index) => `${key} = $${index + 1}`).join(', ');
    const setValues = Object.values(updatedTravel);
    setValues.push(travelId);

    await travelsRepositories.ChangeTravel(setFields, setValues);
}

async function eraseTravels(travelId: number) {

    const travelExist = await travelsRepositories.findTravelById(travelId);

    if (isNaN(travelId) || travelExist <= 0)
        throw invalidId();

    await travelsRepositories.removeTravels(travelId);
}

const travelsServices = {
    getAllTravels,
    insertNewTravel,
    modifyTravel,
    eraseTravels
};

export default travelsServices;