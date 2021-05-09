import MiniProject from '../Api/authapi';
import history from '../history';
import {
  CREATE_MINI_PROJECT,
  FETCH_MINI_PROJECTS,
  FETCH_MINI_PROJECT,
  DELETE_MINI_PROJECT,
  EDIT_MINI_PROJECT,
} from './types';

export const createMiniProject = formValues => async (dispatch) => {
    const response = await MiniProject.post('/api/miniprojects/add', { ...formValues });
    dispatch({ type: CREATE_MINI_PROJECT, payload: response.data });
    history.push('/admin/miniprojects');
  };
  
  export const fetchMiniProjects = () => async dispatch => {
    const response = await MiniProject.get('/api/miniprojects');
  
    dispatch({ type: FETCH_MINI_PROJECTS, payload: response.data });
  };
  
  export const fetchMiniProject = _id => async dispatch => {
    const response = await MiniProject.get(`/api/miniprojects/${_id}`);
  
    dispatch({ type: FETCH_MINI_PROJECT, payload: response.data });
  };
  
  export const editMiniProject = (_id, formValues) => async dispatch => {
    const response = await MiniProject.put(`/api/miniprojects/${_id}`, formValues);
  
    dispatch({ type:EDIT_MINI_PROJECT, payload: response.data });
    history.push('/admin/miniprojects');
  };
  
  export const deleteMiniProject = _id => async dispatch => {
    await MiniProject.delete(`/api/miniprojects/${_id}`);
  
    dispatch({ type: DELETE_MINI_PROJECT, payload: _id });
    history.push('/admin/miniprojects');
  };