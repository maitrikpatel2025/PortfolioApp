import axios from 'axios';
import history from '../history';
import {
  CREATE_CERTIFICATION,
  FETCH_CERTIFICATIONS,
  FETCH_CERTIFICATION,
  DELETE_CERTIFICATION,
  EDIT_CERTIFICATION
} from './types';

export const createCertification = formValues => async (dispatch) => {
    const response = await axios.post('/api/certification/add', { ...formValues });
    dispatch({ type: CREATE_CERTIFICATION, payload: response.data });
    history.push('/admin/certifications');
  };
  
  export const fetchcertifications = () => async dispatch => {
    const response = await axios.get('/api/certification');
  
    dispatch({ type: FETCH_CERTIFICATIONS, payload: response.data });
  };
  
  export const fetchCertification = _id => async dispatch => {
    const response = await axios.get(`/api/certification/${_id}`);
  
    dispatch({ type: FETCH_CERTIFICATION, payload: response.data });
  };
  
  export const editCertification = (_id, formValues) => async dispatch => {
    const response = await axios.put(`/api/certification/${_id}`, formValues);
  
    dispatch({ type: EDIT_CERTIFICATION, payload: response.data });
    history.push('/admin/certifications');
  };
  
  export const deleteCertification = _id => async dispatch => {
    await axios.delete(`/api/certification/${_id}`);
  
    dispatch({ type: DELETE_CERTIFICATION, payload: _id });
    history.push('/admin/certifications');
  };