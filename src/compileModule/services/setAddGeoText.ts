import { TAddGeoTexItem, TAddGeoTexListLog } from "compileModule/types";

const setAddGeoText = ($: cheerio.Root, addGeoText: TAddGeoTexItem[]): TAddGeoTexListLog | undefined => {
    if (addGeoText.length === 0 || !$) {
        return;
    }

    const addGeoTextListLog: TAddGeoTexListLog = {
        totalAddGeoText: addGeoText.length,
        addGeoTextCounter: 0,
        notFoundText: [],
    };

    const setAddGeoText = new Set();

    for (const textlist of addGeoText) {
        $("body")
            .find("*")
            .each((index, element) => {
                let elementContent = $(element)
                    .html()!
                    .replace(/[\r\n]+/g, "")
                    .replace(/\s+/g, " ");

                if (textlist.initText && elementContent.includes(textlist.initText)) {
                    elementContent = elementContent.replace(
                        new RegExp(textlist.initText, "g"),
                        `<span class="text-geo">${textlist.initText}</span>`
                    );
                    setAddGeoText.add(textlist.initText);
                }
                $(element).html(elementContent);
            });
        if (!setAddGeoText.has(textlist.initText)) {
            addGeoTextListLog.notFoundText.push(textlist);
        }
    }

    addGeoTextListLog.addGeoTextCounter = setAddGeoText.size;

    return addGeoTextListLog;
};

export { setAddGeoText };
