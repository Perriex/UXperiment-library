import { INPUTINTERFACE } from './interfaces';
import { getData, setData } from './storage';

const types = ['input[type=text]', 'textarea'];

export const saveInputs = () => {
  const data = getData();
  const textFields = document.querySelectorAll(types.join(', '));

  textFields.forEach((item) => {
    item.addEventListener('change', (e) => {
      const current = e.target as HTMLInputElement;

      const index = data.fields.findIndex((x: INPUTINTERFACE) => x.name === current.name);

      if (!!current.name) {
        if (index === -1) {
          data.fields.push({
            name: current.name,
            value: current.value,
          });
        } else {
          data.fields[index] = {
            name: current.name,
            value: current.value,
          };
        }
        setData(data);
      }
    });
  });
};

export const preloadInputData = () => {
  const data = getData();
  const textFields = document.querySelectorAll(types.join(', '));

  textFields.forEach((item: any) => {
    const index = data.fields.findIndex((x: INPUTINTERFACE) => x.name === item.name);

    item.value = index === -1 ? item.value : data.fields[index].value;
  });
};

export const addButtonAutoComplete = (header: any) => {
  const answer = document.createElement('button');
  answer.setAttribute('id', 'uxperiment-autocomplete');
  answer.setAttribute('value', 'a');
  answer.onclick = () => {
    preloadInputData();
  };
  answer.innerText = 'auto-complete';
  answer.setAttribute('style', 'background-color:#C9E09E; padding:0.4em; border-radius:6px;');
  header.appendChild(answer);
};
