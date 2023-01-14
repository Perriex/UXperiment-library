"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setActionStatus = exports.getActionStatus = exports.setData = exports.getData = exports.setUpStorage = void 0;
const keys_1 = require("./keys");
const defaultObj = {
    urls: [],
    fields: [],
};
const setUpStorage = () => {
    if (!localStorage.getItem(keys_1.STORAGE_KEY))
        localStorage.setItem(keys_1.STORAGE_KEY, JSON.stringify(defaultObj));
};
exports.setUpStorage = setUpStorage;
const getData = () => {
    const data = JSON.parse(localStorage.getItem(keys_1.STORAGE_KEY));
    return data;
};
exports.getData = getData;
const setData = (data) => {
    localStorage.setItem(keys_1.STORAGE_KEY, JSON.stringify(data));
};
exports.setData = setData;
const getActionStatus = (value) => {
    return localStorage.getItem(keys_1.IS_ALLOWED) === value;
};
exports.getActionStatus = getActionStatus;
const setActionStatus = (value) => {
    localStorage.setItem(keys_1.IS_ALLOWED, value);
};
exports.setActionStatus = setActionStatus;
