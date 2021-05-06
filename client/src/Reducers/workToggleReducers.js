
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
                isProjectsOpen: !state.isProjectsOpen,
                isMiniProjectOpen: false,
                isExperienceOpen: false
            };
        case TOGGLE_MINI_PROJECTS:
            return {
                ...state,
                isMiniProjectOpen: !state.isMiniProjectOpen,
                isProjectsOpen: false,
                isExperienceOpen: false
            };
        case TOGGLE_EXPERIENCE:
            return {
                ...state,
                isExperienceOpen: !state.isExperienceOpen,
                isMiniProjectOpen: false,
                isProjectsOpen: false
            };
        default:
            return state;
    }
};
