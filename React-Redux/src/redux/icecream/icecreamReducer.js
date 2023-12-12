import { BUY_ICECREAM } from "./icecreamTypes";

const initialState = {
    numOfIceCreams: 20,
};

const icecreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1,
            };
        default:
            return state;
    }
};

export default icecreamReducer;
