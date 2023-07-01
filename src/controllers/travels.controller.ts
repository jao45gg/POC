import httpStatus from "http-status";
import travelsServices from "../services/travels.service";
import { Request, Response } from "express";

function getTravels(req: Request, res: Response) {
    try {
        const result = travelsServices.getAllTravels();
        res.send(result);
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    }
}



const travelsController = {
    getTravels,
};

export default travelsController;