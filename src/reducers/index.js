import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

const allReducers = combineReducers({
  todos,
  visibilityFilter
});

export default allReducers;
