import travelsRepositories from "../repositories/travels.repository";

function getAllTravels() {
    return travelsRepositories.retrieveAllTravels();
}

const travelsServices = {
    getAllTravels,
};

export default travelsServices;