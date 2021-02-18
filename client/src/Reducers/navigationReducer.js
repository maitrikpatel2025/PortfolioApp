import { TOGGLE_MENU } from "../Action/types";

const InitialState = {
  isMenuOpen: false,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    default:
      return state;
  }
};
