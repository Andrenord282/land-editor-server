import { ErrorManager } from "../utilities";
import { Request, Response, NextFunction } from "express";

const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof ErrorManager) {
        const { status, name, message, stack, storageErrors } = error;
        return res.json({ status, name, message, stack, storageErrors });
    }
};

export { errorMiddleware };
