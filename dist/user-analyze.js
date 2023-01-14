"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.askUsersPermission = void 0;
const links_1 = require("./links");
const storage_1 = require("./storage");
const keys_1 = require("./keys");
const askUsersPermission = () => {
    if (!document.getElementById(keys_1.HEADER_KEY)) {
        const menu = document.querySelector('body');
        const header = document.createElement('header');
        header.setAttribute('id', keys_1.HEADER_KEY);
        header.setAttribute('style', `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #eee;
          opacity:0.6;
          max-height: 6vh;
          z-index: 100000000;
          padding:1em;
          text-align: center;
        `);
        if ((0, storage_1.getActionStatus)('true')) {
            (0, links_1.setEventOFURLs)(header);
            menu.appendChild(header);
        }
        else if ((0, storage_1.getActionStatus)('false')) {
            (0, storage_1.setActionStatus)('false');
        }
        else {
            header.innerText = 'Start analyzing your path?';
            const acceptButton = document.createElement('button');
            acceptButton.onclick = () => {
                (0, storage_1.setActionStatus)('true');
                (0, links_1.setEventOFURLs)(header);
            };
            acceptButton.innerText = 'accept';
            acceptButton.setAttribute('style', 'padding:0.4em; margin:0.5em; background-color:#C6F8BC; border-radius:6px;');
            const denyButton = document.createElement('button');
            denyButton.innerText = 'deny';
            denyButton.onclick = () => {
                header.setAttribute('style', 'display:none');
                (0, storage_1.setActionStatus)('false');
            };
            denyButton.setAttribute('style', 'padding:0.4em; margin:0.5em; background-color:#F7A7A7; border-radius:6px;');
            header.appendChild(acceptButton);
            header.appendChild(denyButton);
            menu.appendChild(header);
        }
    }
};
exports.askUsersPermission = askUsersPermission;
