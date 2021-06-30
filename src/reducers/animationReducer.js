import { ANIMATION_PICKER } from '../actions/types';

const animationReducer = (state = false, action) => {
    if (action.type === ANIMATION_PICKER) {
        return { ...state, selection: action.payload }
    };
    return state;
}

export default animationReducer;