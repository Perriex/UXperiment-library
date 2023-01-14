import { DATAINTERFACE } from "./interfaces";
import { IS_ALLOWED, STORAGE_KEY } from "./keys";

const defaultObj = {
  urls: [],
  fields: [],
};

export const setUpStorage = () => {
  if (!localStorage.getItem(STORAGE_KEY))
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultObj));
};

export const getData = () => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  return data;
};

export const setData = (data: DATAINTERFACE) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getActionStatus = (value: string) => {
  return localStorage.getItem(IS_ALLOWED) === value;
};

export const setActionStatus = (value: string) => {
  localStorage.setItem(IS_ALLOWED, value);
};
