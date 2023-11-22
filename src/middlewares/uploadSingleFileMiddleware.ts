import path from "path";
import { nanoid } from "nanoid";
import { ErrorManager, isSystemError } from "utilities";
import multer, { FileFilterCallback } from "multer";
import { Request, Response, NextFunction } from "express";

const uploadSingleFileMiddleware = (fileFieldName: string, maxSize: number) => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "uploads/");
        },

        filename: (req, file, cb) => {
            const extension = path.extname(file.originalname);
            const id = nanoid(8);

            cb(null, `${file.fieldname}-${id}${extension}`);
        },
    });

    const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
        const contentLength = req.headers["content-length"];

        if (contentLength && parseInt(contentLength) > maxSize) {
            const error = new ErrorManager({
                name: "BadRequest fileFilter",
                status: "400",
                code: "LIMIT_FILE_SIZE",
            });

            cb(error);
            return;
        }

        cb(null, true);
        //!!! СЕЙЧАС ФАЙЛ НЕ ЗАПИСЫВАЕТСЯ!!!
        // cb(null, false);
    };

    const upload = multer({ storage, fileFilter }).single(fileFieldName);

    return (req: Request, res: Response, next: NextFunction) => {
        upload(req, res, (error) => {
            if (isSystemError(error) && "code" in error && error.code === "ENOENT") {
                const e = new ErrorManager({
                    name: "ErrorServer diskStorage",
                    status: "500",
                    code: "NOT_FOUND_PATH",
                    storageErrors: [{ ...error }],
                });

                next(e);
            } else {
                next(error);
            }
        });
    };
};

export { uploadSingleFileMiddleware };
