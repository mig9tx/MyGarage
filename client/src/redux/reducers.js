import { combineReducers } from "redux";
import settings from "./settings/reducer";
import menu from "./menu/reducers";

const reducers = combineReducers({
    menu,
    settings
});

export default reducers;
