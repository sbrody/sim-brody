import { COLOUR_PICKER } from "../actions/types";

const colourReducer = (state = '', action) => {
    if (action.type === COLOUR_PICKER) {

        return { ...state, selection: action.payload }
    }

    return state;
};

export default colourReducer;