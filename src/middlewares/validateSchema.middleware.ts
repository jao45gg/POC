import { Schema } from "joi";
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

export function schemaValidator(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            const errorMessages = error.details.map((detail) => detail.message);
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({ messages: errorMessages });
        }

        next();
    };
};
