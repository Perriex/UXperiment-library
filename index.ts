import { saveMostHittedLinks } from "./src/links";
import { setUpStorage } from "./src/storage";
import { saveInputs } from "./src/inputs";
import { askUsersPermission } from "./src/user-analyze";

const SetUpUXperiment = () => {
  window.addEventListener("load", () => {
    setUpStorage();
    saveMostHittedLinks();
    saveInputs();
    askUsersPermission();
  });
};

export default SetUpUXperiment;
