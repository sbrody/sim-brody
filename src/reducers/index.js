import { combineReducers } from "redux";
import colourReducer from "./colourReducer";

// const reducers = () => {
//     return (
//         'testing'
//     )
// }

export default combineReducers({
    colour: colourReducer
});