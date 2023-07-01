import { Router } from "express";
import travelsController from "../controllers/travels.controller";
import { schemaValidator } from "../middlewares/validateSchema.middleware";
import travelSchema from "../schemas/travels.schema";

const travelsRouter = Router();

travelsRouter.get("/travels", travelsController.getTravels);
travelsRouter.post("/travels", schemaValidator(travelSchema), travelsController.postTravel);

export default travelsRouter;