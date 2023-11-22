import { TAddGeoTexItem, TReplaceText, TReqData, TTaskData } from "compileModule/types";

const setReplaceText = (initData: { id: string; name: string }[]): TReplaceText[] => {
    const replaceText: TReplaceText[] = [];

    initData.forEach((item) => {
        item.name = item.name.trim();
        let splitItemName;
        if (item.name.includes("$-$")) {
            splitItemName = item.name.split("$-$");
        } else {
            splitItemName = item.name.split('" - "');
        }

        splitItemName[0] = splitItemName[0].replace(/^"/, "").trim();
        splitItemName[1] = splitItemName[1].replace(/"$/, "").trim();

        replaceText.push({ old: splitItemName[0], new: splitItemName[1] });
    });

    return replaceText;
};

const setAddGeoText = (initData: { id: string; name: string }[]): TAddGeoTexItem[] => {
    const addGeoText: TAddGeoTexItem[] = [];
    const regexSRC = /\(.+?\)/;
    const regexRU = /(\(ru\)|\(ру\))/i;
    const regexKZ = /(\(kz\)|\(кз\))/i;
    const regexUZ = /(\(uz\)|\(уз\))/i;
    const regexTJ = /(\(tj\)|\(тдж\)|\(тж\))/i;

    initData.forEach((item) => {
        item.name = item.name.trim();
        let splitItemName;
        let addGeoItem: TAddGeoTexItem = {};
        if (item.name.includes("$-$")) {
            splitItemName = item.name.split("$-$");
        } else {
            splitItemName = item.name.split('" - "');
            splitItemName.forEach((item) => {
                if (!regexSRC.test(item)) {
                    item = item.trim().replace(/^"|"$/g, "");
                    addGeoItem.initText = item;
                    return;
                }

                if (regexRU.test(item)) {
                    item = item
                        .replace(/(\(ru\)|\(ру\))/i, "")
                        .trim()
                        .replace(/^"|"$/g, "");
                    addGeoItem.RU = item;
                    return;
                }

                if (regexKZ.test(item)) {
                    item = item
                        .replace(/(\(kz\)|\(кз\))/i, "")
                        .trim()
                        .replace(/^"|"$/g, "");
                    addGeoItem.KZ = item;
                    return;
                }

                if (regexUZ.test(item)) {
                    item = item
                        .replace(/(\(uz\)|\(уз\))/i, "")
                        .trim()
                        .replace(/^"|"$/g, "");

                    addGeoItem.UZ = item;
                    return;
                }

                if (regexTJ.test(item)) {
                    item = item
                        .replace(/(\(tj\)|\(тдж\))/i, "")
                        .trim()
                        .replace(/^"|"$/g, "");
                    addGeoItem.TJ = item;
                    return;
                }
            });
        }

        addGeoText.push(addGeoItem);
    });
    return addGeoText;
};

const setTaskData = (data: TReqData): TTaskData | void => {
    try {
        const {
            imgFolderName,
            replaceText,
            addGeoText,
            initGeo,
            replacedGeo,
            adaptGeoList,
            commentNameSelector,
            commentAvaSelector,
            commentatorList,
        } = data;

        const taskData: TTaskData = {
            imgFolderName,
            replaceText: setReplaceText(replaceText as { id: string; name: string }[]),
            addGeoText: setAddGeoText(addGeoText as { id: string; name: string }[]),
            initGeo,
            replacedGeo,
            adaptGeoList,
            commentNameSelector,
            commentAvaSelector,
            commentatorList,
        };
        return taskData;
    } catch (error) {
        console.log(error);
    }
};

export { setTaskData };
