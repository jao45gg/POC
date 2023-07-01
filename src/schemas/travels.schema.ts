import joi from "joi";
import { newTravel } from "../protocols/travel.protocol";

const travelSchema = joi.object<newTravel>({
    origin: joi.string().required(),
    destiny: joi.string().required(),
    shipping_cost: joi.number().required()
})

export default travelSchema;