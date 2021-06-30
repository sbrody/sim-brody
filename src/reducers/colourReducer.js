import { COLOUR_PICKER } from "../actions/types";

const colourReducer = (state = null, action) => {
    if (action.type === COLOUR_PICKER) {
        console.log('reduced' + state);
        return { ...state, colour: action.payload }
    }
    console.log('wrong type' + state, action)
    return state;
};

export default colourReducer;