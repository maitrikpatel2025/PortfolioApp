import { TOGGLE_MINI_PROJECTS,TOGGLE_PROJECTS,TOGGLE_EXPERIENCE} from './types';

export const toggleProject = () => {
  return {
    type: TOGGLE_PROJECTS
  };
};

export const toggleMiniProject = () => {
  return {
    type: TOGGLE_MINI_PROJECTS
  };
};

export const toggleExperience = value => {
  return {
    type: TOGGLE_EXPERIENCE,
    payload: value
  };
};