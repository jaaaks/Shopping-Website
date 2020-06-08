import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
//combining both the reducers
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
});
