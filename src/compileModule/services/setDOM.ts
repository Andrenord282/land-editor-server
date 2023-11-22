import cheerio from "cheerio";
import * as fs from "fs";

const setDOM = async (srcIndexFile: string): Promise<cheerio.Root | undefined> => {
    try {
        const srcIndex = await fs.promises.readFile(srcIndexFile, "utf8");
        const $ = cheerio.load(srcIndex);
        return $;
    } catch (error) {}
};

export { setDOM };
