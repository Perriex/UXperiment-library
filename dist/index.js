"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const links_1 = require("./links");
const storage_1 = require("./storage");
const inputs_1 = require("./inputs");
const user_analyze_1 = require("./user-analyze");
const SetUpUXperiment = () => {
    window.addEventListener('load', () => {
        (0, storage_1.setUpStorage)();
        (0, links_1.saveMostHittedLinks)();
        (0, inputs_1.saveInputs)();
        (0, user_analyze_1.askUsersPermission)();
    });
};
exports.default = SetUpUXperiment;
