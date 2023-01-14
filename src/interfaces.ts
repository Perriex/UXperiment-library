interface URLINTERFACE {
  name: string;
  address: string;
  count: number;
}

interface INPUTINTERFACE {
  name: string;
  value: string;
}

interface DATAINTERFACE {
  urls: Array<any>;
  fields: Array<any>;
}

export { URLINTERFACE, INPUTINTERFACE, DATAINTERFACE };
