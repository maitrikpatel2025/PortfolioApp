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
    const response = await MiniProject.post('miniprojects/add', { ...formValues });
    dispatch({ type: CREATE_MINI_PROJECT, payload: response.data });
    history.push('/admin/miniproject');
  };
  
  export const fetchMiniProjects = () => async dispatch => {
    const response = await MiniProject.get('miniprojects');
  
    dispatch({ type: FETCH_MINI_PROJECTS, payload: response.data });
  };
  
  export const fetchMiniProject = _id => async dispatch => {
    const response = await MiniProject.get(`miniprojects/${_id}`);
  
    dispatch({ type: FETCH_MINI_PROJECT, payload: response.data });
  };
  
  export const editMiniProject = (_id, formValues) => async dispatch => {
    const response = await MiniProject.put(`miniprojects/${_id}`, formValues);
  
    dispatch({ type:EDIT_MINI_PROJECT, payload: response.data });
    history.push('/admin/miniproject');
  };
  
  export const deleteMiniProject = _id => async dispatch => {
    await MiniProject.delete(`miniprojects/${_id}`);
  
    dispatch({ type: DELETE_MINI_PROJECT, payload: _id });
    history.push('/adminminiprojectss');
  };