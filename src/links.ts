import { URLINTERFACE } from "./interfaces";
import { getData, setData } from "./storage";
import { addButtonAutoComplete } from "./inputs";

export const saveMostHittedLinks = () => {
  document.addEventListener(`click`, (e) => {
    const origin = (e.target as Element).closest(`a`);
    if (origin) {
      const data = getData();

      const index = data.urls.findIndex(
        (x: URLINTERFACE) => x.address === origin.baseURI
      );

      if (index === -1)
        data.urls.push({
          address: origin.baseURI,
          name: origin.innerText,
          count: 1,
        });
      else {
        data.urls[index]["count"] = Number(data.urls[index]["count"]) + 1;
      }

      setData(data);
    }
  });
};

export const setEventOFURLs = (header: any) => {
  document.addEventListener(
    "scroll",
    () => {
      const data = getData();
      const buttons = data.urls
        .sort((p1: URLINTERFACE, p2: URLINTERFACE) => {
          if (p1.count < p2.count) return 1;
          if (p1.count > p2.count) return -1;
          return 0;
        })
        .filter((item: URLINTERFACE) => item.address !== window.location.href)
        .slice(0, 5)
        .map((item: URLINTERFACE) => {
          const btn = document.createElement("a");

          btn.setAttribute(
            "style",
            "padding:0.5em;margin:0.5em 12px;text-decoration:underline"
          );

          btn.innerText = item.name + `(${item.count})`;
          btn.href = item.address;
          return btn;
        });
      header.innerHTML = "";
      buttons.forEach((e: any) => header.appendChild(e));
      addButtonAutoComplete(header);
    },
    { passive: true }
  );
};
