import { combineReducers } from 'redux';
import ProjectsReducer from './reducer_projects';
import ActiveProjectReducer from './reducer_active_project';
import ProfileReducer from './reducer_profile';
import PartnersReducer from './reducer_partners';

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  activeProject: ActiveProjectReducer,
  profile: ProfileReducer,
  partners: PartnersReducer

});

export default rootReducer;
