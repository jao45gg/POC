import joi from "joi";
import { updateTravel } from "../protocols/travel.protocol";

const updatedTravelSchema = joi.object<updateTravel>({
    origin: joi.string(),
    destiny: joi.string(),
    shipping_cost: joi.number()
})

export default updatedTravelSchema;