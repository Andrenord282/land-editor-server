import path from "path";
import * as fs from "fs";
import { changeScript } from "compileModule/data/changeScript";
import { TTaskData, TGeoList } from "compileModule/types";

const setChangeFile = async (data: TTaskData, geoList: TGeoList, destinationPath: string) => {
    const { commentNameSelector, commentAvaSelector } = data;
    const changerCountryCodesString = `const countryCodes = ${JSON.stringify(geoList, null, 2)}`;
    const changerScriptString = changeScript(commentNameSelector, commentAvaSelector);
    const changerFileString = changerCountryCodesString + changerScriptString;
    await fs.promises.mkdir(path.resolve(destinationPath, "js"), { recursive: true });
    await fs.promises.writeFile(path.resolve(destinationPath, "js", "change.js"), changerFileString);
};

export { setChangeFile };
