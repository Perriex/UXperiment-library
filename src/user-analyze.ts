import { setEventOFURLs } from './links';
import { getActionStatus, setActionStatus } from './storage';
import { HEADER_KEY } from './keys';

export const askUsersPermission = () => {
  if (!document.getElementById(HEADER_KEY)) {
    const menu = document.querySelector('body');
    const header = document.createElement('header');
    header.setAttribute('id', HEADER_KEY);
    header.setAttribute(
      'style',
      `
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
        `,
    );
    if (getActionStatus('true')) {
      setEventOFURLs(header);
      menu.appendChild(header);
    } else if (getActionStatus('false')) {
      setActionStatus('false');
    } else {
      header.innerText = 'Start analyzing your path?';
      const acceptButton = document.createElement('button');
      acceptButton.onclick = () => {
        setActionStatus('true');
        setEventOFURLs(header);
      };
      acceptButton.innerText = 'accept';
      acceptButton.setAttribute('style', 'padding:0.4em; margin:0.5em; background-color:#C6F8BC; border-radius:6px;');

      const denyButton = document.createElement('button');
      denyButton.innerText = 'deny';
      denyButton.onclick = () => {
        header.setAttribute('style', 'display:none');
        setActionStatus('false');
      };

      denyButton.setAttribute('style', 'padding:0.4em; margin:0.5em; background-color:#F7A7A7; border-radius:6px;');

      header.appendChild(acceptButton);
      header.appendChild(denyButton);
      menu.appendChild(header);
    }
  }
};
