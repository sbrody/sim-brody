// action creators
import {
    COLOUR_PICKER
} from './types';


export const pickColour = (colour) => {

    console.log('action' + colour);
    return ({
        type: COLOUR_PICKER,
        payload: colour
    })
};

