import experience from '../Api/authapi';
import history from '../history';
import {
  CREATE_EXPERIENCE,
  FETCH_EXPERIENCES,
  FETCH_EXPERIENCE,
  DELETE_EXPERIENCE,
  EDIT_EXPERIENCE
} from './types';

export const createExperience = formValues => async (dispatch) => {
    const response = await experience.post('/experience/add', { ...formValues });
    dispatch({ type: CREATE_EXPERIENCE, payload: response.data });
    history.push('/admin/experiences');
  };
  
  export const fetchExperiences = () => async dispatch => {
    const response = await experience.get('/experience');
  
    dispatch({ type: FETCH_EXPERIENCES, payload: response.data });
  };
  
  export const fetchExperience = _id => async dispatch => {
    const response = await experience.get(`/experience/${_id}`);
  
    dispatch({ type: FETCH_EXPERIENCE, payload: response.data });
  };
  
  export const editExperience = (_id, formValues) => async dispatch => {
    const response = await experience.put(`/experience/${_id}`, formValues);
  
    dispatch({ type: EDIT_EXPERIENCE, payload: response.data });
    history.push('/admin/experiences');
  };
  
  export const deleteExperience = _id => async dispatch => {
    await experience.delete(`/experience/${_id}`);
  
    dispatch({ type: DELETE_EXPERIENCE, payload: _id });
    history.push('/admin/experiences');
  };