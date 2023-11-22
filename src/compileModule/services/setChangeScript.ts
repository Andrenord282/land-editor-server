const setChangeScript = (countryCodesString: string, commentNameSelector: string, commentAvaSelector: string) => {
    return `window.addEventListener("DOMContentLoaded", function () {
        ${countryCodesString}
    
        let textContentFlag = false;
        let prevGeo = null;
    
        const change = function change(e) {
            const userNames = document.querySelectorAll("${commentNameSelector}");
            const userImg = document.querySelectorAll("${commentAvaSelector}");
            const currentGeo = e;
            const textContent = document.querySelectorAll(".text-geo");
    
            function setTextContent(currentGeo, collectionText, geo) {
                collectionText.forEach((itemText) => {
                    for (let indexSetItem = 0; indexSetItem < geo[currentGeo].textGeo.length; indexSetItem++) {
                        const checkText = geo[currentGeo].textGeo[indexSetItem][0];
    
                        if (
                            itemText.textContent
                            .replace(/\\n/gi, "")
                                .trim()
                                .replace(/\s{2,}/gi, " ")
                                .toLowerCase() == checkText.toLowerCase()
                        ) {
                            itemText.textContent = geo[currentGeo].textGeo[indexSetItem][1];
                            break;
                        }
                    }
                });
                textContentFlag = true;
                prevGeo = currentGeo;
            }
    
            function resetTextContent(currentGeo, collectionText, geo) {
                collectionText.forEach((itemText) => {
                    for (let indexSetItem = 0; indexSetItem < geo[prevGeo].textGeo.length; indexSetItem++) {
                        const checkText = geo[prevGeo].textGeo[indexSetItem][1];
    
                        if (
                            itemText.textContent
                            .replace(/\\n/gi, "")
                                .trim()
                                .replace(/\s{2,}/gi, " ")
                                .toLowerCase() == checkText.toLowerCase()
                        ) {
                            itemText.textContent = geo[prevGeo].textGeo[indexSetItem][0];
                            break;
                        }
                    }
                });
                prevGeo = currentGeo;
            }
    
            function changeTextContent(currentGeo, collectionText, geo) {
                if (!textContentFlag) {
                    setTextContent(currentGeo, collectionText, geo);
                } else {
                    resetTextContent(currentGeo, collectionText, geo);
                    setTextContent(currentGeo, collectionText, geo);
                }
            }
    
            changeTextContent(currentGeo, textContent, countryCodes);
    
            function changeOneImg(collection, prop) {
                collection.forEach((img) => {
                    if (img) {
                        img.src = prop;
                    }
                });
            }
    
            function changeImgCollection(collection, prop) {
                collection.forEach((img, i) => {
                    if (img) {
                        img.src = prop[i];
                    }
                });
            }
    
            changeImgCollection(userImg, countryCodes[e].userImg);
    
            function changeTextCollection(collection, prop) {
                collection.forEach((text, i) => {
                    if (text) {
                        text.innerHTML = prop[i];
                    }
                });
            }
            changeTextCollection(userNames, countryCodes[e].userNames);
            changeTextCollection(city, countryCodes[e].city);
        };
        selectors.forEach(function (elem) {
            elem.addEventListener("change", function (e) {
                if (Object.keys(countryCodes).includes(e.target.value)) {
                    change(e.target.value);
                }
            });
        });
        if (Object.keys(countryCodes).includes(selectors[0].value)) {
            change(selectors[0].value);
        }
    });`;
};

export { setChangeScript };
