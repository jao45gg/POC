import { Router } from "express";
import travelsController from "../controllers/travels.controller";
import { schemaValidator } from "../middlewares/validateSchema.middleware";
import travelSchema from "../schemas/travels.schema";
import updatedTravelSchema from "../schemas/updateTravels.schema";

const travelsRouter = Router();

travelsRouter.get("/travels", travelsController.getTravels);
travelsRouter.post("/travels", schemaValidator(travelSchema), travelsController.postTravel);
travelsRouter.put("/travels/:id", schemaValidator(updatedTravelSchema), travelsController.updateTravels);
travelsRouter.delete("/travels/:id", travelsController.deleteTravels);

export default travelsRouter;