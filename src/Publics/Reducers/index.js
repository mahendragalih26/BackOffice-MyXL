import { combineReducers } from "redux";

import users from "./users";
import packageItem from "./packageItem";
import myPackage from "./package";
import myCategory from "./category";
import myTransaction from "./transaction";
import addBalance from "./balance";

const rootReducer = combineReducers({
  users,
  myPackage,
  packageItem,
  myCategory,
  myTransaction,
  addBalance
});

export default rootReducer;
