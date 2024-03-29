import axios from 'axios';
import history from '../history';
import {
  CREATE_VOLUTEER_EXPERIENCE,
  FETCH_VOLUTEER_EXPERIENCES,
  FETCH_VOLUTEER_EXPERIENCE,
  DELETE_VOLUTEER_EXPERIENCE,
  EDIT_VOLUTEER_EXPERIENCE
} from './types';

export const createVoluteerExperience = formValues => async (dispatch) => {
    const response = await axios.post('/api/voluteerexpericence/add', { ...formValues });
    dispatch({ type: CREATE_VOLUTEER_EXPERIENCE, payload: response.data });
    history.push('/admin/voluteerexperience');
  };
  
  export const fetchVoluteerExperiences = () => async dispatch => {
    const response = await axios.get('/api/voluteerexpericence');
  
    dispatch({ type: FETCH_VOLUTEER_EXPERIENCES, payload: response.data });
  };
  
  export const fetchVoluteerExperience = _id => async dispatch => {
    const response = await axios.get(`/api/voluteerexpericence/${_id}`);
  
    dispatch({ type: FETCH_VOLUTEER_EXPERIENCE, payload: response.data });
  };
  
  export const editVoluteerExperience = (_id, formValues) => async dispatch => {
    const response = await axios.put(`/api/voluteerexpericence/${_id}`, formValues);
  
    dispatch({ type: EDIT_VOLUTEER_EXPERIENCE, payload: response.data });
    history.push('/admin/voluteerexperience');
  };
  
  export const deleteVoluteerExperience = _id => async dispatch => {
    await axios.delete(`/api/voluteerexpericence/${_id}`);
  
    dispatch({ type: DELETE_VOLUTEER_EXPERIENCE, payload: _id });
    history.push('/admin/voluteerexperience');
  };