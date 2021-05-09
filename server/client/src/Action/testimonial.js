import axios from 'axios';
import history from '../history';
import {
  CREATE_TESTIMONIAL,
  FETCH_TESTIMONIALS,
  FETCH_TESTIMONIAL,
  DELETE_TESTIMONIAL,
  EDIT_TESTIMONIAL
} from './types';

export const createTestimonial = formValues => async (dispatch) => {
    const response = await axios.post('/api/testimonial/add', { ...formValues });
    dispatch({ type: CREATE_TESTIMONIAL, payload: response.data });
    history.push('/admin/testimonial');
  };
  
  export const fetchTestimonials  = () => async dispatch => {
    const response = await axios.get('/api/testimonial');
  
    dispatch({ type: FETCH_TESTIMONIALS, payload: response.data });
  };
  
  export const fetchTestimonial = _id => async dispatch => {
    const response = await axios.get(`/api/testimonial/${_id}`);
  
    dispatch({ type: FETCH_TESTIMONIAL, payload: response.data });
  };
  
  export const editTestimonial = (_id, formValues) => async dispatch => {
    const response = await axios.put(`/api/testimonial/${_id}`, formValues);
  
    dispatch({ type: EDIT_TESTIMONIAL, payload: response.data });
    history.push('/admin/testimonial');
  };
  
  export const deleteTestimonial = _id => async dispatch => {
    await axios.delete(`/api/testimonial/${_id}`);
  
    dispatch({ type: DELETE_TESTIMONIAL, payload: _id });
    history.push('/admin/testimonial');
  };