import axios from 'axios';
import history from '../history';
import {
  CREATE_CONTACT,
  FETCH_CONTACTS,
  FETCH_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT
} from './types';

export const createContact = formValues => async (dispatch) => {
    const response = await axios.post('/api/contact/add', { ...formValues });
    dispatch({ type: CREATE_CONTACT, payload: response.data });
    history.push('/thankyou');
  };
  
  export const fetchContacts  = () => async dispatch => {
    const response = await axios.get('/api/contact');
  
    dispatch({ type: FETCH_CONTACTS, payload: response.data });
  };
  
  export const fetchContact = _id => async dispatch => {
    const response = await axios.get(`/api/contact/${_id}`);
  
    dispatch({ type: FETCH_CONTACT, payload: response.data });
  };
  
  export const editContact = (_id, formValues) => async dispatch => {
    const response = await axios.put(`/api/contact/${_id}`, formValues);
  
    dispatch({ type: EDIT_CONTACT, payload: response.data });
    history.push('/admin/contacts');
  };
  
  export const deleteContact = _id => async dispatch => {
    await axios.delete(`/api/contact/${_id}`);
  
    dispatch({ type: DELETE_CONTACT, payload: _id });
    history.push('/admin/contacts');
  };