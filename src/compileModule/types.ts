export type TCommentatorListItem = {
    id: string;
    value: string;
};

export type TReplaceText = {
    old: string;
    new: string;
};

type TInitText = {
    initText?: string;
};

export type TAddGeoTexItem = TInitText & {
    [key in TCountryCode]?: string;
};

export type TReqData = {
    imgFolderName: string;
    replaceText: object[];
    addGeoText: object[];
    initGeo: string;
    replacedGeo: string;
    adaptGeoList: TCountryCode[];
    commentNameSelector: string;
    commentAvaSelector: string;
    commentatorList: TCommentatorListItem[];
};

export type TTaskData = {
    imgFolderName: string;
    replaceText: TReplaceText[];
    addGeoText: TAddGeoTexItem[];
    initGeo: string;
    replacedGeo: string;
    adaptGeoList: TCountryCode[];
    commentNameSelector: string;
    commentAvaSelector: string;
    commentatorList: TCommentatorListItem[];
};

export type TCountryCode = "RU" | "KZ" | "UZ" | "KG" | "TJ";

export type TGeoItem = {
    countryCode: TCountryCode;
    userImg: string[];
    userNames: string[];
    textGeo: string[][];
};

export type TGeoList = TGeoItem[];

export type TGeoListLogItem = {
    countryCode: string;
    totalCounterNames: number;
    addCounterNames: number;
    totalCounterAva: number;
    addCounterAva: number;
    errorNameList: string[];
    errorAvaList: string[];
};

export type TGeoListLog = TGeoListLogItem[];

export type TReplaceTextListLog = {
    totalPairText: number;
    replaceTextCounter: number;
    notFoundText: TReplaceText[];
};

export type TAddGeoTexListLog = {
    totalAddGeoText: number;
    addGeoTextCounter: number;
    notFoundText: TAddGeoTexItem[];
};

export type TReplaceGeoListLog = {
    totalCounterNames: number;
    totalCounterAva: number;
    replaceCounterNames: number;
    replaceCounterAva: number;
    errorNameList: string[];
    errorAvaList: string[];
};

export type TLogList = {
    refToNewLand: string;
    replaceTextListLog?: TReplaceTextListLog;
    addGeoTextListLog?: TAddGeoTexListLog;
    replaceGeoListLog?: TReplaceGeoListLog;
    adapGeoListLog?: TGeoListLog;
};

export type TSetGeoListProps = {
    initGeo: string;
    adaptGeoList: TCountryCode[];
};

export type TSetCommentGeoProps = {
    geoList: TGeoList | undefined;
    imgFolderPath: string;
    imgFolderName: string;
    commentatorList: TCommentatorListItem[];
};

export type TSetReplaceGeoProps = {
    replacedGeo: string;
    $: cheerio.Root;
    imgFolderName: string;
    imgFolderPath: string;
    commentNameSelector: string;
    commentAvaSelector: string;
    commentatorList: TCommentatorListItem[];
};
