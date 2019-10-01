import { combineReducers } from "redux";

import users from "./users";
import packageItem from "./packageItem";

const rootReducer = combineReducers({
  users,
  packageItem
});

export default rootReducer;
