import project from '../Api/authapi';
import history from '../history';
import {
  CREATE_PROJECT,
  FETCH_PROJECTS,
  FETCH_PROJECT,
  DELETE_PROJECT,
  EDIT_PROJECT
} from './types';

export const createProject = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await project.post('/project/add', { ...formValues, userId });
  
    dispatch({ type: CREATE_PROJECT, payload: response.data });
    history.push('/');
  };
  
  export const fetchProjects = () => async dispatch => {
    const response = await project.get('/project');
  
    dispatch({ type: FETCH_PROJECTS, payload: response.data });
  };
  
  export const fetchProject = id => async dispatch => {
    const response = await project.get(`/project/${id}`);
  
    dispatch({ type: FETCH_PROJECT, payload: response.data });
  };
  
  export const editProject = (id, formValues) => async dispatch => {
    const response = await project.patch(`/project/${id}`, formValues);
  
    dispatch({ type: EDIT_PROJECT, payload: response.data });
    history.push('/');
  };
  
  export const deleteProject = id => async dispatch => {
    await project.delete(`/project/${id}`);
  
    dispatch({ type: DELETE_PROJECT, payload: id });
    history.push('/');
  };