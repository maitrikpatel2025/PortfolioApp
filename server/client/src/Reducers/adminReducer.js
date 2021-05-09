import { IS_ADMIN } from "../Action/types";

const InitialState = {
  isAdminOpen: false,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case IS_ADMIN:
      return {
        ...state,
        isAdminOpen: !state.isAdminOpen,
      };
    default:
      return state;
  }
};