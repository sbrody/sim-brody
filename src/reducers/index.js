import { combineReducers } from "redux";
import animalReducer from "./animalReducer";
import animationReducer from "./animationReducer";
import colourReducer from "./colourReducer";
import logoClickReducer from "./logoClickReducer";
import pollReducer from "./pollReducer";


// const reducers = () => {
//     return (
//         'testing'
//     )
// }

export default combineReducers({
    colour: colourReducer,
    animation: animationReducer,
    animal: animalReducer,
    sector: pollReducer,
    ishome: logoClickReducer
});