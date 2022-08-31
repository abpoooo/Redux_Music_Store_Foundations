import {combineReducers} from "redux";
import {SongReducer} from "./SongReducer";
import {MessageBarReducer} from "./MessageBarReducer";

export default combineReducers(
    {
        SongReducer,
        MessageBarReducer,
})