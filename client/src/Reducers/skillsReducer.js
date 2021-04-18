import _                    from 'lodash';
import {
  CREATE_SKILL,
  FETCH_SKILLS,
  FETCH_SKILL,
  EDIT_SKILL,
  DELETE_SKILL,
}                           from "../Action/types";


export default (state = {}, action) => {

    switch (action.type) {

        case FETCH_SKILLS:
           return { ...state, ..._.mapKeys(action.payload, '_id')}; 
        case FETCH_SKILL:
            return{...state,[action.payload._id]: action.payload};
        case CREATE_SKILL:
            return{...state,[action.payload._id]: action.payload};
        case EDIT_SKILL:
            return{...state,[action.payload._id]: action.payload};
        case DELETE_SKILL:
            return _.omit(state,action.payload);
        default:
            return state;

    }

}