import { combineReducers } from "redux";
import { boardReducer } from "./Board/reducrer";

export const indexReducer = combineReducers({
  board: boardReducer
});
