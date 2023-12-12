/**
 * @file Redux Demo
 * @description A simple demonstration of Redux implementation in JavaScript.
 */
// Import redux

const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action creator
function buyCake() {
    // Action
    return {
        type: BUY_CAKE,
        info: "First redux action",
    };
}

function buyIcecream() {
    // Action
    return {
        type: BUY_ICECREAM,
        info: "Second redux action",
    };
}

// Initial state
const initialCakeState = {
    numOfCakes: 10,
};
const initialIcecreamState = {
    numofIcecreams: 20,
};

// Reducer
const cakeReducer = (state = initialCakeState, action) => {
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

const icecreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numofIcecreams: state.numofIcecreams - 1,
            };

        default:
            return state;
    }
};

// Store

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state ", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
