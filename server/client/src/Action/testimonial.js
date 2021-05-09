import testimonial from '../Api/authapi';
import history from '../history';
import {
  CREATE_TESTIMONIAL,
  FETCH_TESTIMONIALS,
  FETCH_TESTIMONIAL,
  DELETE_TESTIMONIAL,
  EDIT_TESTIMONIAL
} from './types';

export const createTestimonial = formValues => async (dispatch) => {
    const response = await testimonial.post('/api/testimonial/add', { ...formValues });
    dispatch({ type: CREATE_TESTIMONIAL, payload: response.data });
    history.push('/admin/testimonial');
  };
  
  export const fetchTestimonials  = () => async dispatch => {
    const response = await testimonial.get('/api/testimonial');
  
    dispatch({ type: FETCH_TESTIMONIALS, payload: response.data });
  };
  
  export const fetchTestimonial = _id => async dispatch => {
    const response = await testimonial.get(`/api/testimonial/${_id}`);
  
    dispatch({ type: FETCH_TESTIMONIAL, payload: response.data });
  };
  
  export const editTestimonial = (_id, formValues) => async dispatch => {
    const response = await testimonial.put(`/api/testimonial/${_id}`, formValues);
  
    dispatch({ type: EDIT_TESTIMONIAL, payload: response.data });
    history.push('/admin/testimonial');
  };
  
  export const deleteTestimonial = _id => async dispatch => {
    await testimonial.delete(`/api/testimonial/${_id}`);
  
    dispatch({ type: DELETE_TESTIMONIAL, payload: _id });
    history.push('/admin/testimonial');
  };