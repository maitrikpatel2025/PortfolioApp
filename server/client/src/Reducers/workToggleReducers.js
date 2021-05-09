
import { TOGGLE_PROJECTS, TOGGLE_MINI_PROJECTS, TOGGLE_EXPERIENCE } from '../Action/types';

const initialState = {
    isProjectsOpen: true,
    isMiniProjectOpen: false,
    isExperienceOpen: false,
};

export default (state = { initialState }, action) => {
    switch (action.type) {
        case TOGGLE_PROJECTS:
            return {
                ...state,
                isProjectsOpen: true,
                isMiniProjectOpen: false,
                isExperienceOpen: false
            };
        case TOGGLE_MINI_PROJECTS:
            return {
                ...state,
                isMiniProjectOpen: true,
                isProjectsOpen: false,
                isExperienceOpen: false
            };
        case TOGGLE_EXPERIENCE:
            return {
                ...state,
                isExperienceOpen: true,
                isMiniProjectOpen: false,
                isProjectsOpen: false
            };
        default:
            return state;
    }
};
