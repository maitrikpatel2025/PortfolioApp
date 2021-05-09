import _                    from 'lodash';
import {
  CREATE_MEETING,
  FETCH_MEETINGS,
  FETCH_MEETING,
  EDIT_MEETING,
  DELETE_MEETING,
}                           from "../Action/types";


export default (state = {}, action) => {

    switch (action.type) {

        case FETCH_MEETINGS:
           return { ...state, ..._.mapKeys(action.payload, '_id')}; 
        case FETCH_MEETING:
            return{...state,[action.payload._id]: action.payload};
        case CREATE_MEETING:
            return{...state,[action.payload._id]: action.payload};
        case EDIT_MEETING:
            return{...state,[action.payload._id]: action.payload};
        case DELETE_MEETING:
            return _.omit(state,action.payload);
        default:
            return state;

    }

}