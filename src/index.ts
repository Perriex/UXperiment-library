import { saveMostHittedLinks } from './links';
import { setUpStorage } from './storage';
import { saveInputs } from './inputs';
import { askUsersPermission } from './user-analyze';

const SetUpUXperiment = () => {
  window.addEventListener('load', () => {
    setUpStorage();
    saveMostHittedLinks();
    saveInputs();
    askUsersPermission();
  });
};

export default SetUpUXperiment;
