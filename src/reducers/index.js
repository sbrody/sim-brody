import { combineReducers } from "redux";
import animationReducer from "./animationReducer";
import colourReducer from "./colourReducer";

// const reducers = () => {
//     return (
//         'testing'
//     )
// }

export default combineReducers({
    colour: colourReducer,
    animation: animationReducer
});