import _                    from 'lodash';
import {
  CREATE_MINI_PROJECT,
  FETCH_MINI_PROJECTS,
  FETCH_MINI_PROJECT,
  EDIT_MINI_PROJECT,
  DELETE_MINI_PROJECT,
}                           from "../Action/types";


export default (state = {}, action) => {

    switch (action.type) {

        case FETCH_MINI_PROJECTS:
           return { ...state, ..._.mapKeys(action.payload, '_id')}; 
        case FETCH_MINI_PROJECT:
            return{...state,[action.payload._id]: action.payload};
        case CREATE_MINI_PROJECT:
            return{...state,[action.payload._id]: action.payload};
        case EDIT_MINI_PROJECT:
            return{...state,[action.payload._id]: action.payload};
        case DELETE_MINI_PROJECT:
            return _.omit(state,action.payload);
        default:
            return state;

    }

}