import axios from 'axios';
import history from '../history';
import {
  CREATE_SKILL,
  FETCH_SKILLS,
  FETCH_SKILL,
  DELETE_SKILL,
  EDIT_SKILL
} from './types';

export const createSkill = formValues => async (dispatch) => {
    const response = await axios.post('/api/skills/add', { ...formValues });
    dispatch({ type: CREATE_SKILL, payload: response.data });
    history.push('/admin/skills');
  };
  
  export const fetchskills = () => async dispatch => {
    const response = await axios.get('/api/skills');
  
    dispatch({ type: FETCH_SKILLS, payload: response.data });
  };
  
  export const fetchSkill = _id => async dispatch => {
    const response = await axios.get(`/api/skills/${_id}`);
  
    dispatch({ type: FETCH_SKILL, payload: response.data });
  };
  
  export const editSkill = (_id, formValues) => async dispatch => {
    const response = await axios.put(`/api/skills/${_id}`, formValues);
    dispatch({ type: EDIT_SKILL, payload: response.data });
    history.push('/admin/skills');
  };
  
  export const deleteSkill = _id => async dispatch => {
    await axios.delete(`/api/skills/${_id}`);
  
    dispatch({ type: DELETE_SKILL, payload: _id });
    history.push('/admin/skills');
  };