import { combineReducers } from "redux";
import settins from "./settings/reducer";
import menu from "./menu/reducer";

const reducers = combinReducers({
    menu,
    settings
});

export default reducers;
