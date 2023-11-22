import * as fs from "fs";
import path from "path";
import { setFullName } from "../data/nameList";
import { STORAGE_ASSETS_IMG_FOLDER } from "utilities/constants";
import { TCountryCode, TReplaceGeoListLog, TSetReplaceGeoProps } from "compileModule/types";

const setReplaceUserName = (
    fullNameList: string[],
    $commentNameList: cheerio.Cheerio,
    listLogItem: TReplaceGeoListLog,
    genderCounter: number,
    totalCounter: number,
    gender: string
) => {
    if (fullNameList[genderCounter]) {
        $commentNameList.eq(totalCounter).text(fullNameList[genderCounter]);
        listLogItem.replaceCounterNames =
            listLogItem.replaceCounterNames === 0 ? 1 : listLogItem.replaceCounterNames + 1;
    } else {
        listLogItem.errorNameList.push("");
        listLogItem.errorNameList.push(`не хватило имени ${gender} номер ${genderCounter + 1}`);
    }
};

const setRepeatReplaceUserName = (
    $commentNameList: cheerio.Cheerio,
    listLogItem: TReplaceGeoListLog,
    totalCounter: number,
    stepsBack: number
) => {
    const repeatUserName = $commentNameList.eq(totalCounter - stepsBack).text();
    $commentNameList.eq(totalCounter).text(repeatUserName);
    listLogItem.replaceCounterNames = listLogItem.replaceCounterNames === 0 ? 1 : listLogItem.replaceCounterNames + 1;
};

const setReplaceUserImg = async (
    $commentAvaList: cheerio.Cheerio,
    replacedGeo: string,
    listLogItem: TReplaceGeoListLog,
    genderCounter: number,
    totalCounter: number,
    imgFolderName: string,
    imgFolderPath: string,
    gender: string
) => {
    try {
        const country = replacedGeo.toLocaleLowerCase();
        const imgFileName = `${gender}-${genderCounter + 1}.jpg`;
        const srcImgFilePath = path.resolve(STORAGE_ASSETS_IMG_FOLDER, country, imgFileName);
        const imgGeoName = path.resolve(imgFolderPath, country);
        const distImgFilePath = path.resolve(imgFolderPath, country, imgFileName);
        $commentAvaList.eq(totalCounter).attr("src", `${imgFolderName}/${country}/${imgFileName}`);
        await fs.promises.access(srcImgFilePath);
        await fs.promises.mkdir(imgGeoName, { recursive: true });
        await fs.promises.copyFile(srcImgFilePath, distImgFilePath);
        listLogItem.replaceCounterAva = listLogItem.replaceCounterAva === 0 ? 1 : listLogItem.replaceCounterAva + 1;
    } catch (error) {
        listLogItem.errorAvaList.push(`нет аватарки ${gender}-${genderCounter}.jpg`);
    }
};

const setRepeatReplaceUserImg = (
    $commentAvaList: cheerio.Cheerio,
    listLogItem: TReplaceGeoListLog,
    totalCounter: number,
    stepsBack: number
) => {
    const repeatUserAva = $commentAvaList.eq(totalCounter - stepsBack).attr("src");
    $commentAvaList.eq(totalCounter).attr("src", repeatUserAva!);
    listLogItem.replaceCounterAva = listLogItem.replaceCounterAva === 0 ? 1 : listLogItem.replaceCounterAva + 1;
};

const setReplaceGeo = async (props: TSetReplaceGeoProps): Promise<TReplaceGeoListLog | undefined> => {
    const { replacedGeo, $, imgFolderPath, imgFolderName, commentNameSelector, commentAvaSelector, commentatorList } =
        props;

    if (!replacedGeo) {
        return;
    }
    const replaceGeoListLog: TReplaceGeoListLog = {
        totalCounterNames: commentatorList.length,
        totalCounterAva: commentatorList.length,
        replaceCounterNames: 0,
        replaceCounterAva: 0,
        errorNameList: [],
        errorAvaList: [],
    };

    const fullNameList = setFullName(replacedGeo as TCountryCode);
    let totalCounter = 0;
    let menСounter = 0;
    let womanCounter = 0;

    const $commentNameList = $(commentNameSelector);
    const $commentAvaList = $(commentAvaSelector);


    for (const comment of commentatorList) {
        switch (true) {
            case comment.value === "Мужчина":
                setReplaceUserName(
                    fullNameList.man,
                    $commentNameList,
                    replaceGeoListLog,
                    menСounter,
                    totalCounter,
                    "мужчина"
                );
                await setReplaceUserImg(
                    $commentAvaList,
                    replacedGeo,
                    replaceGeoListLog,
                    menСounter,
                    totalCounter,
                    imgFolderName,
                    imgFolderPath,
                    "m"
                );
                totalCounter++;
                menСounter++;
                break;

            case comment.value === "Женщина":
                setReplaceUserName(
                    fullNameList.woman,
                    $commentNameList,
                    replaceGeoListLog,
                    womanCounter,
                    totalCounter,
                    "женщина"
                );
                await setReplaceUserImg(
                    $commentAvaList,
                    replacedGeo,
                    replaceGeoListLog,
                    womanCounter,
                    totalCounter,
                    imgFolderName,
                    imgFolderPath,
                    "w"
                );
                totalCounter++;
                womanCounter++;
                break;

            case comment.value.includes("Повторить:"):
                const stepsBack = comment.value.match(/\d+/)?.slice(0, 1).join("");
                if (stepsBack) {
                    setRepeatReplaceUserName($commentNameList, replaceGeoListLog, totalCounter, parseInt(stepsBack));
                    setRepeatReplaceUserImg($commentAvaList, replaceGeoListLog, totalCounter, parseInt(stepsBack));
                    totalCounter++;
                }
                break;
        }
    }

    return replaceGeoListLog;
};
export { setReplaceGeo };
