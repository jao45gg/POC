import express from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routers/index.routes";
import errorHandler from "./middlewares/handleErros.middleware";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));