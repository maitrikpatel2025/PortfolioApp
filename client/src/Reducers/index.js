import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
import navigationReducer from "./navigationReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
  navigation: navigationReducer,
  form: formReducer,
  admin: adminReducer,
  auth: authReducer,
  project: projectReducer
});
