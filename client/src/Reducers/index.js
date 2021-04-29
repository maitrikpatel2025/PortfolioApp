import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
import certificationReducer from "./certificationReducer";
import contactsReducer from "./contactsReducer";
import experienceReducer from "./experienceReducer";
import meetingReducer from "./meetingReducer";
import miniProjectsReducer from "./miniProjectsReducer";
import navigationReducer from "./navigationReducer";
import projectReducer from "./projectReducer";
import skillsReducer from "./skillsReducer";
import testimonialReducer from "./testimonialReducer";
import voluteerExperienceReducer from "./voluteerExperienceReducer";

export default combineReducers({
  navigation: navigationReducer,
  form: formReducer,
  admin: adminReducer,
  auth: authReducer,
  project: projectReducer,
  miniProject: miniProjectsReducer,
  skill : skillsReducer,
  certification: certificationReducer,
  experience: experienceReducer,
  voluteerExperience: voluteerExperienceReducer,
  testimonial:testimonialReducer,
  contact: contactsReducer,
  meeting:meetingReducer
});
