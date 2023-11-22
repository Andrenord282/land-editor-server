import { Router } from "express";
import { storageController } from "../controllers";

const storageRouter: Router = Router();

storageRouter.get("/:zipName", storageController);

export { storageRouter };
