import { combineReducers } from "redux";
import hotelsReducer from "./hotelsReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  hotels: hotelsReducer
});

export default rootReducer