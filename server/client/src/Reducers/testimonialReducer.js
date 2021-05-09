import _                    from 'lodash';
import {
  CREATE_TESTIMONIAL,
  FETCH_TESTIMONIALS,
  FETCH_TESTIMONIAL,
  EDIT_TESTIMONIAL,
  DELETE_TESTIMONIAL,
}                           from "../Action/types";


export default (state = {}, action) => {

    switch (action.type) {

        case FETCH_TESTIMONIALS:
           return { ...state, ..._.mapKeys(action.payload, '_id')}; 
        case FETCH_TESTIMONIAL:
            return{...state,[action.payload._id]: action.payload};
        case CREATE_TESTIMONIAL:
            return{...state,[action.payload._id]: action.payload};
        case EDIT_TESTIMONIAL:
            return{...state,[action.payload._id]: action.payload};
        case DELETE_TESTIMONIAL:
            return _.omit(state,action.payload);
        default:
            return state;

    }

}