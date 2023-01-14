"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addButtonAutoComplete = exports.preloadInputData = exports.saveInputs = void 0;
const storage_1 = require("./storage");
const types = ['input[type=text]', 'textarea'];
const saveInputs = () => {
    const data = (0, storage_1.getData)();
    const textFields = document.querySelectorAll(types.join(', '));
    textFields.forEach((item) => {
        item.addEventListener('change', (e) => {
            const current = e.target;
            const index = data.fields.findIndex((x) => x.name === current.name);
            if (!!current.name) {
                if (index === -1) {
                    data.fields.push({
                        name: current.name,
                        value: current.value,
                    });
                }
                else {
                    data.fields[index] = {
                        name: current.name,
                        value: current.value,
                    };
                }
                (0, storage_1.setData)(data);
            }
        });
    });
};
exports.saveInputs = saveInputs;
const preloadInputData = () => {
    const data = (0, storage_1.getData)();
    const textFields = document.querySelectorAll(types.join(', '));
    textFields.forEach((item) => {
        const index = data.fields.findIndex((x) => x.name === item.name);
        item.value = index === -1 ? item.value : data.fields[index].value;
    });
};
exports.preloadInputData = preloadInputData;
const addButtonAutoComplete = (header) => {
    const answer = document.createElement('button');
    answer.setAttribute('id', 'uxperiment-autocomplete');
    answer.setAttribute('value', 'a');
    answer.onclick = () => {
        (0, exports.preloadInputData)();
    };
    answer.innerText = 'auto-complete';
    answer.setAttribute('style', 'background-color:#C9E09E; padding:0.4em; border-radius:6px;');
    header.appendChild(answer);
};
exports.addButtonAutoComplete = addButtonAutoComplete;
