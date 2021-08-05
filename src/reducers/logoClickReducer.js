import { LOGO_CLICK } from "../actions/types";

const logoClickReducer = (state = false, action) => {
    if (action.type === LOGO_CLICK) {
        return action.payload
    }
    return state;
}

export default logoClickReducer;