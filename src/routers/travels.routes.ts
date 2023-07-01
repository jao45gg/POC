import { Router } from "express";
import travelsController from "../controllers/travels.controller";

const travelsRouter = Router();

travelsRouter.get("/travels", travelsController.getTravels);

export default travelsRouter;