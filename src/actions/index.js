// action creators
import {
    COLOUR_PICKER,
    ANIMATION_PICKER
} from './types';


export const pickColour = (colour) => {

    console.log('action' + colour);
    return ({
        type: COLOUR_PICKER,
        payload: colour
    })
};

export const selectAnimation = (selection) => {
    return ({
        type: ANIMATION_PICKER,
        payload: selection
    })
};
