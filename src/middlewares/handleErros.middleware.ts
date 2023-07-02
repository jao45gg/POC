import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export default function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    if (error.name === "invalidId")
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);

    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}
