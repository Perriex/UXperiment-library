import { saveMostHittedLinks } from './links';
import { setUpStorage } from './storage';
import { saveInputs } from './inputs';
import { askUsersPermission } from './user-analyze';

const SetUpUXperiment = () => {
  window.addEventListener('load', () => {
    setUpStorage();
    askUsersPermission();
  });
  window.addEventListener('scroll', () => {
    saveMostHittedLinks();
    saveInputs();
  });
};

export default SetUpUXperiment;
