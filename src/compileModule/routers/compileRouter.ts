import { Router } from "express";
import { uploadSingleFileMiddleware } from "middlewares/uploadSingleFileMiddleware";
import { compileController } from "../controllers";

const compileRouter: Router = Router();

compileRouter.post("/post", uploadSingleFileMiddleware("land", 5_242_880), compileController);

export { compileRouter };
