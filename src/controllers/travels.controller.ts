import httpStatus from "http-status";
import travelsServices from "../services/travels.service";
import { Request, Response } from "express";
import { newTravel, updateTravel } from "../protocols/travel.protocol";
import db from "../database/database.connection";

async function postTravel(req: Request, res: Response) {
    try {
        const body = req.body as newTravel;
        await travelsServices.insertNewTravel(body);
        res.sendStatus(httpStatus.OK);
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    }
}

async function getTravels(req: Request, res: Response) {
    try {
        const result = await travelsServices.getAllTravels();
        res.send(result);
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    }
}

async function updateTravels(req: Request, res: Response) {
    try {

        const travelId = Number(req.params.id);
        const updatedTravel = req.body as updateTravel;

        await travelsServices.modifyTravel(travelId, updatedTravel);

        res.sendStatus(httpStatus.OK);

    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    }
}

const travelsController = {
    getTravels,
    postTravel,
    updateTravels
};

export default travelsController;