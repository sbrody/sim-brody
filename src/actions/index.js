// action creators
import {
    COLOUR_PICKER,
    ANIMATION_PICKER,
    ANIMAL_PICKER,
    SECTOR_PICKER,
    LOGO_CLICK,
} from './types';
import axios from 'axios';


export const pickColour = (colour) => {
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

export const selectAnimal = (animal) => {

    return async (dispatch) => {
        const response = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: animal
            }
        });

        dispatch({ type: ANIMAL_PICKER, payload: response.data });
    }
};

export const selectSector = (sector) => {
    console.log(sector);
    return ({
        type: SECTOR_PICKER,
        payload: sector
    })
};

export const logoClicked = (clicked) => {
    return ({
        type: LOGO_CLICK,
        payload: clicked
    })
        ;
}
