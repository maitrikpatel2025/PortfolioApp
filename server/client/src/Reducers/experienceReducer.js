import _                    from 'lodash';
import {
  CREATE_EXPERIENCE,
  FETCH_EXPERIENCES,
  FETCH_EXPERIENCE,
  EDIT_EXPERIENCE,
  DELETE_EXPERIENCE,
}                           from "../Action/types";


export default (state = {}, action) => {

    switch (action.type) {

        case FETCH_EXPERIENCES:
           return { ...state, ..._.mapKeys(action.payload, '_id')}; 
        case FETCH_EXPERIENCE:
            return{...state,[action.payload._id]: action.payload};
        case CREATE_EXPERIENCE:
            return{...state,[action.payload._id]: action.payload};
        case EDIT_EXPERIENCE:
            return{...state,[action.payload._id]: action.payload};
        case DELETE_EXPERIENCE:
            return _.omit(state,action.payload);
        default:
            return state;

    }

}