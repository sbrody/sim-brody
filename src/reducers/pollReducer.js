import { SECTOR_PICKER } from "../actions/types";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const INITIAL_STATE = {
    health: 0,
    tech: 0,
    media: 0,
    finance: 0,
    other: 0
};

const pollReducer = (state = INITIAL_STATE, action) => {
    if (action.type === SECTOR_PICKER) {

        switch (action.payload) {
            case 'health':
                return {
                    ...state, health: state.health + 1
                }
            case 'tech':
                return {
                    ...state, tech: state.tech + 1
                }
            case 'media':
                return {
                    ...state, media: state.media + 1
                }
            case 'finance':
                return {
                    ...state, finance: state.finance + 1
                }
            default:
                return {
                    ...state, other: state.other + 1
                }
        }


    };
    return state;
};

const persistConfig = {
    key: 'sector',
    storage: storage
}

export default persistReducer(persistConfig, pollReducer);