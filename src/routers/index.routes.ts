import { Router } from "express";
import travelsRouter from "./travels.routes";

const router = Router();

router.use(travelsRouter);

export default router;