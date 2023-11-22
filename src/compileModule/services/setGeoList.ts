import { TGeoList, TCountryCode, TSetGeoListProps } from "compileModule/types";
import { ErrorManager } from "utilities";

const existingGeo: TCountryCode[] = ["RU", "KZ", "UZ", "KG", "TJ"];

const setGeoList = (props: TSetGeoListProps): TGeoList | undefined => {
    try {
        const { initGeo, adaptGeoList } = props;

        if (!initGeo) {
            return;
        }

        const geoList: TGeoList = [];

        adaptGeoList.forEach((geo) => {
            if (!existingGeo.includes(geo)) {
                throw new ErrorManager({
                    name: "BadRequest setGeoList",
                    code: "NOT_FOUND_GEO_NAME",
                    status: "400",
                    storageErrors: [{ notFoundGeo: geo, in: existingGeo }],
                });
            }
            geoList.push({
                countryCode: geo,
                userImg: [],
                userNames: [],
                textGeo: [],
            });
        });

        return geoList;
    } catch (error) {
        if (error instanceof Error) {
            throw new ErrorManager({
                name: "ErrorServer setGeoList",
                code: "FILED_SET_GEO_LIST",
                status: "500",
                storageErrors: [error],
            });
        }
    }
};

export { setGeoList };
