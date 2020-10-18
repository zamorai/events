import { combineReducers } from "redux";
import modalReducer from "../../app/common/modals/modalReducer";
import authReducer from "../auth/authReducer";
import eventReducer from './eventReducer';


export default combineReducers({
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer
})