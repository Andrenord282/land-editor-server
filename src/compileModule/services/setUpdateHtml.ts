import * as fs from "fs";
import path from "path";
import { setChangeScript } from "./setChangeScript";
import { TGeoList } from "compileModule/types";

const setCountryCodesString = (geoListString: string) => {
    return `var countryCodes = {${geoListString}};`.replace(/\n/g, "").replace(/\s+/g, " ");
};

const setUpdateLand = async (
    $: cheerio.Root,
    landFolderName: string,
    landFolderPath: string,
    geoList: TGeoList | undefined,
    initGeo: string,
    commentNameSelector: string,
    commentAvaSelector: string
): Promise<string> => {
    try {
        const initGeoListString = () => {
            const srcCommentNames = $(commentNameSelector)
                .map((index, element) => $(element).text())
                .get();
            const srcCommentImg = $(commentAvaSelector)
                .map((index, element) => $(element).attr("src"))
                .get();

            return `\n${initGeo}: {
                userImg: [${srcCommentImg.map((img) => `"${img}"`)}],
                userNames: [${srcCommentNames.map((name) => `"${name}"`)}],
            },`;
        };

        if (geoList) {
            const geoListToString = geoList.reduce((string, geoItem) => {
                const { countryCode, userImg, userNames } = geoItem;
                geoItem.textGeo = [
                    ["Михаил Гришин", "Михаил Гришин"],
                    ["#Мобилизация в России", "#Мобилизация в России"],
                    ["#Операция на Украине", "#Операция на Украине"],
                    ["россияне", "россияне"],
                ];

                string = `${string}\n${countryCode}: {
                    userImg: [${userImg.map((img) => `"${img}"`)}],
                    userNames: [${userNames.map((name) => `"${name}"`)}],
                    textGeo: [${geoItem.textGeo.map((textPair) => {
                        return `[${textPair.map((text) => `"${text}"`)}]`;
                    })}]
                },`;
                return string;
            }, initGeoListString());

            const countryCodesString = setCountryCodesString(geoListToString);
            const changeScripts = setChangeScript(countryCodesString, commentNameSelector, commentAvaSelector);

            await fs.promises.writeFile(path.resolve(landFolderPath, "js", "change.js"), changeScripts);
        }

        await fs.promises.writeFile(path.resolve(landFolderPath, "index.html"), $.html());

        return landFolderName;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error);
        }
        return "";
    }
};

export { setUpdateLand };
