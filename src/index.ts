import express, { Express, Request, Response } from "express";
import { errorMiddleware } from "middlewares/errorMiddleware";
import { compileRouter } from "compileModule/routers";
import { storageRouter } from "storageModule/routers";

import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 6700;

app.use(cors());
app.use(express.json());
app.use("/compile", compileRouter);
app.use("/storage", storageRouter);
app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
