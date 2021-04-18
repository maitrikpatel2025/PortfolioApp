import contact from '../Api/authapi';
import history from '../history';
import {
  CREATE_CONTACT,
  FETCH_CONTACTS,
  FETCH_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT
} from './types';

export const createContact = formValues => async (dispatch) => {
    const response = await contact.post('/contact/add', { ...formValues });
    dispatch({ type: CREATE_CONTACT, payload: response.data });
    history.push('/admin/contacts');
  };
  
  export const fetchContacts  = () => async dispatch => {
    const response = await contact.get('/contact');
  
    dispatch({ type: FETCH_CONTACTS, payload: response.data });
  };
  
  export const fetchContact = _id => async dispatch => {
    const response = await contact.get(`/contact/${_id}`);
  
    dispatch({ type: FETCH_CONTACT, payload: response.data });
  };
  
  export const editContact = (_id, formValues) => async dispatch => {
    const response = await contact.put(`/contact/${_id}`, formValues);
  
    dispatch({ type: EDIT_CONTACT, payload: response.data });
    history.push('/admin/contacts');
  };
  
  export const deleteContact = _id => async dispatch => {
    await contact.delete(`/contact/${_id}`);
  
    dispatch({ type: DELETE_CONTACT, payload: _id });
    history.push('/admin/contacts');
  };