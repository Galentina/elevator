import { combineReducers } from "redux";
import {floorReducer as floors} from "../reducers";

export const rootReducer = combineReducers({
    floors,
});
