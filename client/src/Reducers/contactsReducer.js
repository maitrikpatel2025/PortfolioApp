import _                    from 'lodash';
import {
  CREATE_CONTACT,
  FETCH_CONTACTS,
  FETCH_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
}                           from "../Action/types";


export default (state = {}, action) => {

    switch (action.type) {

        case FETCH_CONTACTS:
           return { ...state, ..._.mapKeys(action.payload, '_id')}; 
        case FETCH_CONTACT:
            return{...state,[action.payload._id]: action.payload};
        case CREATE_CONTACT:
            return{...state,[action.payload._id]: action.payload};
        case EDIT_CONTACT:
            return{...state,[action.payload._id]: action.payload};
        case DELETE_CONTACT:
            return _.omit(state,action.payload);
        default:
            return state;

    }

}