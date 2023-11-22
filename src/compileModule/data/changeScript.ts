const changeScript = (commentName: string, commentImg: string) => {
    return `

    var textContentFlag = false,
    prevGeo = null;
    var change = function change(e) {
    var heroImg = document.querySelectorAll('.hero-img'),
        commentName = document.querySelectorAll('${commentName}'),
        commentImg = document.querySelectorAll('${commentImg}'),
        currentGeo = e,
        textGeo = document.querySelectorAll('.text-geo');

    function setTextContent(currentGeo, collectionText, geo) {
        collectionText.forEach((itemText) => {
            for (let indexSetItem = 0; indexSetItem < geo[currentGeo].textGeo.length; indexSetItem++) {
                const checkText = geo[currentGeo].textGeo[indexSetItem][0];

                if (
                    itemText.textContent.replace(/\\n/gi, '')
                        .trim()
                        .replace(/\s{2,}/gi, ' ')
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
                        .replace(/\\n/gi, '')
                        .trim()
                        .replace(/\s{2,}/gi, ' ')
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

    changeTextContent(currentGeo, textGeo, countryCodes);

    function changeImgCollection(collection, prop) {
        collection.forEach((img, i) => {
            if (img) {
                img.src = prop[i];
            }
        });
    }

    changeImgCollection(commentImg, countryCodes[e].commentImg);

    function changeTextCollection(collection, prop) {
        collection.forEach((text, i) => {
            if (text) {
                text.innerHTML = prop[i];
            }
        });
    }

    changeTextCollection(commentName, countryCodes[e].commentName);
};

selectors.forEach(function (elem) {
    elem.addEventListener('change', function (e) {
        if (Object.keys(countryCodes).includes(e.target.value)) {
            change(e.target.value);
        }
    });
});

if (Object.keys(countryCodes).includes(selectors[0].value)) {
    change(selectors[0].value);
}
`;
};

export { changeScript };
