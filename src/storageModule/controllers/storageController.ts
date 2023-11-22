import { Request, Response, NextFunction } from "express";
import path from "path";
import * as fs from "fs";
import { STORAGE_FOLDER } from "utilities/constants";

type TStorageReqParams = {
    zipName: string;
};

const storageController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { zipName } = req.params as TStorageReqParams;

        res.download(path.resolve(STORAGE_FOLDER, zipName), () => {
            fs.promises.unlink(path.resolve(STORAGE_FOLDER, zipName));
        });
    } catch (error) {
        return next(error);
    }
};

export { storageController };
