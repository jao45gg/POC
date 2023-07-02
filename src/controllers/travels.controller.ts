import httpStatus from "http-status";
import travelsServices from "../services/travels.service";
import { Request, Response } from "express";
import { newTravel, updateTravel } from "../protocols/travel.protocol";

async function postTravel(req: Request, res: Response) {

    const body = req.body as newTravel;
    await travelsServices.insertNewTravel(body);
    res.sendStatus(httpStatus.OK);

}

async function getTravels(req: Request, res: Response) {

    const result = await travelsServices.getAllTravels();
    res.send(result);

}

async function updateTravels(req: Request, res: Response) {

    const travelId = Number(req.params.id);
    const updatedTravel = req.body as updateTravel;

    await travelsServices.modifyTravel(travelId, updatedTravel);

    res.sendStatus(httpStatus.OK);

}

async function deleteTravels(req: Request, res: Response) {

    const travelId = Number(req.params.id);

    await travelsServices.eraseTravels(travelId);

    res.sendStatus(httpStatus.OK);

}

const travelsController = {
    getTravels,
    postTravel,
    updateTravels,
    deleteTravels
};

export default travelsController;