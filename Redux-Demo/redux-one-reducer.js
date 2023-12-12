// Import redux
const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

// Action creator
function buyCake() {
    // Action
    return {
        type: BUY_CAKE,
        info: "First redux action",
    };
}

// Initial state
const initialState = {
    numOfCakes: 10,
};

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            };

        default:
            return state;
    }
};

// Store
const store = createStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state ", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
