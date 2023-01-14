"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEventOFURLs = exports.saveMostHittedLinks = void 0;
const storage_1 = require("./storage");
const inputs_1 = require("./inputs");
const saveMostHittedLinks = () => {
    document.addEventListener(`click`, (e) => {
        const origin = e.target.closest(`a`);
        if (origin) {
            const data = (0, storage_1.getData)();
            const index = data.urls.findIndex((x) => x.address === origin.baseURI);
            if (index === -1)
                data.urls.push({
                    address: origin.baseURI,
                    name: origin.innerText,
                    count: 1,
                });
            else {
                data.urls[index].count = Number(data.urls[index].count) + 1;
            }
            (0, storage_1.setData)(data);
        }
    });
};
exports.saveMostHittedLinks = saveMostHittedLinks;
const setEventOFURLs = (header) => {
    document.addEventListener('scroll', () => {
        const data = (0, storage_1.getData)();
        const buttons = data.urls
            .sort((p1, p2) => {
            if (p1.count < p2.count)
                return 1;
            if (p1.count > p2.count)
                return -1;
            return 0;
        })
            .filter((item) => item.address !== window.location.href)
            .slice(0, 5)
            .map((item) => {
            const btn = document.createElement('a');
            btn.setAttribute('style', 'padding:0.5em;margin:0.5em 12px;text-decoration:underline');
            btn.innerText = item.name + `(${item.count})`;
            btn.href = item.address;
            return btn;
        });
        header.innerHTML = '';
        buttons.forEach((e) => header.appendChild(e));
        (0, inputs_1.addButtonAutoComplete)(header);
    }, { passive: true });
};
exports.setEventOFURLs = setEventOFURLs;
