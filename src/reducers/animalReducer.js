import { ANIMAL_PICKER } from "../actions/types";

const animalReducer = (state = 'cats', action) => {
    if (action.type === ANIMAL_PICKER) {
        return { ...state, selection: action.payload }
    }
    return state;
};

export default animalReducer;