import { combineReducers } from "redux";
import reducer from "./userReducer";

const rootReducer = combineReducers({
  userinfo: reducer,
});

export default rootReducer;
