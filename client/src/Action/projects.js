
import project from '../Api/authapi';
import history from '../history';
import {
  CREATE_PROJECT,
  FETCH_PROJECTS,
  FETCH_PROJECT,
  DELETE_PROJECT,
  EDIT_PROJECT
} from './types';

export const createProject = formValues => async (dispatch) => {
    const response = await project.post('/project/add', { ...formValues });
    console.log(formValues)
    dispatch({ type: CREATE_PROJECT, payload: response.data });
    
    history.push('/admin/projects');
  };
  
  export const fetchProjects = () => async dispatch => {
    const response = await project.get('/project');
  
    dispatch({ type: FETCH_PROJECTS, payload: response.data });
  };
  
  export const fetchProject = _id => async dispatch => {
    const response = await project.get(`/project/${_id}`);
  
    dispatch({ type: FETCH_PROJECT, payload: response.data });
  };
  
  export const editProject = (_id, formValues) => async dispatch => {
    const response = await project.put(`/project/${_id}`, formValues);
  
    dispatch({ type: EDIT_PROJECT, payload: response.data });
    history.push('/admin/projects');
  };
  
  export const deleteProject = _id => async dispatch => {
    await project.delete(`/project/${_id}`);
  
    dispatch({ type: DELETE_PROJECT, payload: _id });
    history.push('/admin/projects');
  };