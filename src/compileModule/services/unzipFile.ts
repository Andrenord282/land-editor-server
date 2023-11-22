import * as fs from "fs";
import AdmZip from "adm-zip";
import { ErrorManager, isSystemError } from "../../utilities/errorManager";

const unzipFile = async (zipFilePath: string, destinationPath: string) => {
    try {
        const zip = new AdmZip(zipFilePath);

        await fs.promises.mkdir(destinationPath, { recursive: true });
        zip.extractAllTo(destinationPath);
        fs.promises.unlink(zipFilePath);
    } catch (error) {
        if (isSystemError(error) && "code" in error && error.code === "ENOENT") {
            fs.promises.rm(destinationPath, { recursive: true });
            fs.promises.unlink(zipFilePath);
            throw new ErrorManager({
                name: "ErrorServer unzipFile",
                status: "500",
                code: "NOT_FOUND_PATH",
                storageErrors: [error],
            });
        }
        if (error instanceof Error && error.message === "Invalid or unsupported zip format. No END header found") {
            throw new ErrorManager({
                name: "BadRequest unzipFile",
                status: "400",
                code: "INCORRECT_ARCHIVE_EXTENSION",
                storageErrors: [error],
            });
        }
    }
};

export { unzipFile };
