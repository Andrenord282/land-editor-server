import * as fs from "fs";
import path from "path";
import { STORAGE_ASSETS_IMG_FOLDER } from "utilities/constants";
import { setFullName } from "../data/nameList";
import { TGeoItem, TGeoListLog, TSetCommentGeoProps, TGeoListLogItem } from "compileModule/types";

const setUserName = (
    fullNameList: string[],
    geo: TGeoItem,
    listLogItem: TGeoListLogItem,
    counter: number,
    gender: string
) => {
    if (fullNameList[counter]) {
        geo.userNames.push(fullNameList[counter]);
        listLogItem.addCounterNames = listLogItem.addCounterNames === 0 ? 1 : listLogItem.addCounterNames + 1;
    } else {
        geo.userNames.push(`не хватило имени ${gender} номер ${counter + 1}`);
        listLogItem.errorNameList.push(`не хватило имени ${gender} номер ${counter + 1}`);
    }
};

const setRepeatUserName = (geo: TGeoItem, listLogItem: TGeoListLogItem, counter: number, stepsBack: number) => {
    const repeatUserName = geo.userNames[counter - stepsBack];
    geo.userNames.push(repeatUserName);
    listLogItem.addCounterNames = listLogItem.addCounterNames === 0 ? 1 : listLogItem.addCounterNames + 1;
};

const setUserImg = async (
    geo: TGeoItem,
    listLogItem: TGeoListLogItem,
    counter: number,
    imgFolderPath: string,
    imgFolderName: string,
    gender: string
) => {
    try {
        const country = geo.countryCode.toLocaleLowerCase();
        const imgFileName = `${gender}-${counter + 1}.jpg`;
        const srcImgFilePath = path.resolve(STORAGE_ASSETS_IMG_FOLDER, country, imgFileName);
        const imgGeoName = path.resolve(imgFolderPath, country);
        const distImgFilePath = path.resolve(imgFolderPath, country, imgFileName);
        await fs.promises.access(srcImgFilePath);
        await fs.promises.mkdir(imgGeoName, { recursive: true });
        await fs.promises.copyFile(srcImgFilePath, distImgFilePath);
        geo.userImg.push(`${imgFolderName}/${country}/${imgFileName}`);
        listLogItem.addCounterAva = listLogItem.addCounterAva === 0 ? 1 : listLogItem.addCounterAva + 1;
    } catch (error) {
        listLogItem.errorAvaList.push(`нет аватарки ${gender}-${counter}.jpg`);
        geo.userImg.push(`нет аватарки ${gender}-${counter}.jpg`);
    }
};

const setRepeatUserImg = (geo: TGeoItem, listLogItem: TGeoListLogItem, counter: number, stepsBack: number) => {
    const repeatUserAva = geo.userImg[counter - stepsBack];
    geo.userImg.push(repeatUserAva);
    listLogItem.addCounterAva = listLogItem.addCounterAva === 0 ? 1 : listLogItem.addCounterAva + 1;
};

const setCommentGeo = async (props: TSetCommentGeoProps) => {
    try {
        const { geoList, imgFolderPath, imgFolderName, commentatorList } = props;

        if (!geoList) {
            return;
        }

        const geoListLog: TGeoListLog = [];

        for (const geo of geoList) {
            const { countryCode } = geo;
            let totalCounter = 0;
            let menСounter = 0;
            let womanCounter = 0;
            const fullNameList = setFullName(countryCode);

            const geoListLogItem: TGeoListLogItem = {
                countryCode,
                totalCounterNames: commentatorList.length,
                addCounterNames: 0,
                totalCounterAva: commentatorList.length,
                addCounterAva: 0,
                errorNameList: [],
                errorAvaList: [],
            };

            for (const comment of commentatorList) {
                switch (true) {
                    case comment.value === "Мужчина":
                        setUserName(fullNameList.man, geo, geoListLogItem, menСounter, "мужчине");
                        await setUserImg(geo, geoListLogItem, menСounter, imgFolderPath, imgFolderName, "m");
                        totalCounter++;
                        menСounter++;
                        break;

                    case comment.value === "Женщина":
                        setUserName(fullNameList.woman, geo, geoListLogItem, womanCounter, "женщине");
                        await setUserImg(geo, geoListLogItem, womanCounter, imgFolderPath, imgFolderName, "w");
                        totalCounter++;
                        womanCounter++;
                        break;

                    case comment.value.includes("Повторить:"):
                        const stepsBack = comment.value.match(/\d+/)?.slice(0, 1).join("");

                        if (stepsBack) {
                            setRepeatUserName(geo, geoListLogItem, totalCounter, parseInt(stepsBack));
                            setRepeatUserImg(geo, geoListLogItem, totalCounter, parseInt(stepsBack));
                            totalCounter++;
                        }
                        break;
                }
            }
            geoListLog.push(geoListLogItem);
        }

        return geoListLog;
    } catch (error) {}
};

export { setCommentGeo };
