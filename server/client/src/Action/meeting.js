import axios from 'axios';
import history from '../history';
import {
  CREATE_MEETING,
  FETCH_MEETINGS,
  FETCH_MEETING,
  DELETE_MEETING,
  EDIT_MEETING
} from './types';

export const createMeeting = formValues => async (dispatch) => {
    const response = await axios.post('/api/meeting/add', { ...formValues });
    dispatch({ type: CREATE_MEETING, payload: response.data });
    history.push('/admin/meetings');
  };
  
  export const fetchMeetings  = () => async dispatch => {
    const response = await axios.get('/api/meeting');
  
    dispatch({ type: FETCH_MEETINGS, payload: response.data });
  };
  
  export const fetchMeeting = _id => async dispatch => {
    const response = await axios.get(`/api/meeting/${_id}`);
  
    dispatch({ type: FETCH_MEETING, payload: response.data });
  };
  
  export const editMeeting = (_id, formValues) => async dispatch => {
    const response = await axios.put(`/api/meeting/${_id}`, formValues);
  
    dispatch({ type: EDIT_MEETING, payload: response.data });
    history.push('/admin/meetings');
  };
  
  export const deleteMeeting = _id => async dispatch => {
    await axios.delete(`/api/meeting/${_id}`);
  
    dispatch({ type: DELETE_MEETING, payload: _id });
    history.push('/admin/meetings');
  };