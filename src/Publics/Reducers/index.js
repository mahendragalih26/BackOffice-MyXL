import { combineReducers } from "redux";

import users from "./users";
import packageItem from "./packageItem";
import myPackage from "./package";

const rootReducer = combineReducers({
  users,
  myPackage,
  packageItem
});

export default rootReducer;
