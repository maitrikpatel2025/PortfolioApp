
import authapi from '../Api/authapi'
import {AUTH_USER,AUTH_ERROR} from './types'

export const signup = (formProps,callback) => async dispatch => {
    try{
    const response = await authapi.post('/signup', formProps);
    dispatch({
        type: AUTH_USER,
        payload: response.data.token
    })
    callback();
    } catch(e){
        dispatch({
         type: AUTH_ERROR,
         payload: 'Email in use' 
        }
        )
    }
}