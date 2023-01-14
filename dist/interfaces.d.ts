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
    urls: any[];
    fields: any[];
}
export { URLINTERFACE, INPUTINTERFACE, DATAINTERFACE };
