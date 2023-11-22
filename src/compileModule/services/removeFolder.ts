import * as fs from "fs";

const removeFolder = async (folderPath: string) => {
    await fs.promises.rm(folderPath, { recursive: true });
};

export { removeFolder };
