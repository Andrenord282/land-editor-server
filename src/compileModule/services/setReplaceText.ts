import { TReplaceTextListLog, TReplaceText } from "compileModule/types";

const setReplaceText = ($: cheerio.Root, replaceTextList: TReplaceText[]): TReplaceTextListLog | undefined => {
    if (replaceTextList.length === 0 || !$) {
        return;
    }

    const replaceListLog: TReplaceTextListLog = {
        totalPairText: replaceTextList.length,
        replaceTextCounter: 0,
        notFoundText: [],
    };

    const setPairText = new Set();

    for (const pairText of replaceTextList) {
        $("body")
            .find("*")
            .each((index, element) => {
                let elementContent = $(element)
                    .html()!
                    .replace(/[\r\n]+/g, "")
                    .replace(/\s+/g, " ")
                    .trim();

                const regExpOldText = new RegExp(pairText.old, "g");

                if (regExpOldText.test(elementContent)) {
                    elementContent = elementContent!.replace(new RegExp(pairText.old, "g"), pairText.new);
                    $(element).html(elementContent);
                    setPairText.add(pairText.old);
                }
            });

        if (!setPairText.has(pairText.old)) {
            replaceListLog.notFoundText.push(pairText);
        }
    }

    replaceListLog.replaceTextCounter = setPairText.size;

    return replaceListLog;
};

export { setReplaceText };
