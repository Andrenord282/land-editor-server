import path from "path";
import { Request, Response, NextFunction } from "express";
import { TSetCommentGeoProps, TSetReplaceGeoProps, TReqData, TSetGeoListProps, TLogList } from "compileModule/types";
import { setGeoList } from "compileModule/services/setGeoList";
import { STORAGE_FOLDER, UPLOAD_FOLDER } from "utilities/constants";
import { setTaskData } from "compileModule/services/setTaskData";
import { setDOM } from "compileModule/services/setDOM";
import { setCommentGeo } from "compileModule/services/setCommentGeo";
import { unzipFile } from "compileModule/services/unzipFile";
import { zipFile } from "compileModule/services/zipFile";
import { setReplaceText } from "compileModule/services/setReplaceText";
import { setAddGeoText } from "compileModule/services/setAddGeoText";
import { setReplaceGeo } from "compileModule/services/setReplaceGeo";
import { setUpdateLand } from "compileModule/services/setUpdateHtml";
import { removeFolder } from "compileModule/services/removeFolder";

const compileController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { file, body } = req;

        if (!file) {
            return;
        }
        const baseUrl = "http://localhost:6700";
        const fileExt = path.extname(file.filename);
        const landFolderName = file.filename.replace(fileExt, "");
        const uploadFolderPath = path.resolve(UPLOAD_FOLDER, file.filename);
        const landFolderPath = path.resolve(STORAGE_FOLDER, landFolderName);
        const landZipPath = path.resolve(STORAGE_FOLDER, `${landFolderName}.zip`);
        const srcIndexFile = path.resolve(STORAGE_FOLDER, landFolderName, "index.html");
        const taskData = setTaskData(JSON.parse(body.data) as TReqData);

        await unzipFile(uploadFolderPath, landFolderPath);

        if (!taskData) {
            return;
        }

        const {
            replaceText,
            addGeoText,
            initGeo,
            replacedGeo,
            adaptGeoList,
            imgFolderName,
            commentNameSelector,
            commentAvaSelector,
            commentatorList,
        } = taskData;

        const DOM = await setDOM(srcIndexFile);

        if (!DOM) {
            return;
        }

        const replaceTextListLog = setReplaceText(DOM, replaceText);
        const addGeoTextListLog = setAddGeoText(DOM, addGeoText);

        const setReaplaceGeoProps: TSetReplaceGeoProps = {
            replacedGeo,
            $: DOM,
            imgFolderName,
            imgFolderPath: path.resolve(landFolderPath, imgFolderName),
            commentNameSelector,
            commentAvaSelector,
            commentatorList,
        };

        const replaceGeoListLog = await setReplaceGeo(setReaplaceGeoProps);

        const setGeoListPorps: TSetGeoListProps = {
            initGeo,
            adaptGeoList,
        };

        const geoList = setGeoList(setGeoListPorps);

        const setCommentGeoProps: TSetCommentGeoProps = {
            geoList,
            imgFolderPath: path.resolve(landFolderPath, imgFolderName),
            imgFolderName,
            commentatorList,
        };

        const adapGeoListLog = await setCommentGeo(setCommentGeoProps);

        const refToNewLand = await setUpdateLand(
            DOM,
            landFolderName,
            landFolderPath,
            geoList,
            initGeo,
            commentNameSelector,
            commentAvaSelector
        );

        zipFile(landFolderPath, landZipPath);
        removeFolder(landFolderPath);

        const logList: TLogList = {
            refToNewLand: `${baseUrl}/${STORAGE_FOLDER}/${landFolderName}.zip`,
            replaceTextListLog,
            addGeoTextListLog,
            replaceGeoListLog,
            adapGeoListLog,
        };
        res.status(200).json(logList);
    } catch (error) {
        return next(error);
    }
};

export { compileController };
