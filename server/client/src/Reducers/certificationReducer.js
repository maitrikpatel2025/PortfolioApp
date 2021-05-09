import _ from 'lodash';
import {
    CREATE_CERTIFICATION,
    FETCH_CERTIFICATIONS,
    FETCH_CERTIFICATION,
    EDIT_CERTIFICATION,
    DELETE_CERTIFICATION,
} from "../Action/types";


export default (state = {}, action) => {

    switch (action.type) {

        case FETCH_CERTIFICATIONS:
            return { ...state, ..._.mapKeys(action.payload, '_id') };
        case FETCH_CERTIFICATION:
            return { ...state, [action.payload._id]: action.payload };
        case CREATE_CERTIFICATION:
            return { ...state, [action.payload._id]: action.payload };
        case EDIT_CERTIFICATION:
            return { ...state, [action.payload._id]: action.payload };
        case DELETE_CERTIFICATION:
            return _.omit(state, action.payload);
        default:
            return state;

    }

}