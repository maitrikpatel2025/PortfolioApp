import _                    from 'lodash';
import {
  CREATE_VOLUTEER_EXPERIENCE,
  FETCH_VOLUTEER_EXPERIENCES,
  FETCH_VOLUTEER_EXPERIENCE,
  EDIT_VOLUTEER_EXPERIENCE,
  DELETE_VOLUTEER_EXPERIENCE,
}                           from "../Action/types";


export default (state = {}, action) => {

    switch (action.type) {

        case FETCH_VOLUTEER_EXPERIENCES:
           return { ...state, ..._.mapKeys(action.payload, '_id')}; 
        case FETCH_VOLUTEER_EXPERIENCE:
            return{...state,[action.payload._id]: action.payload};
        case CREATE_VOLUTEER_EXPERIENCE:
            return{...state,[action.payload._id]: action.payload};
        case EDIT_VOLUTEER_EXPERIENCE:
            return{...state,[action.payload._id]: action.payload};
        case DELETE_VOLUTEER_EXPERIENCE:
            return _.omit(state,action.payload);
        default:
            return state;

    }

}