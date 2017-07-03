import reducer from './reducers/main-reducers';
import constants from './constants/constants';

export function createStore(reducer, initState) {
    let state = initState;
    let subscribers = [];

    function getState() {
        return state;
    }

    function subscribe(cb) {
        subscribers.push(cb);
    }

    function dispatch(action) {
        state = reducer(state, action);
        subscribers.forEach(sub => {
            sub();
        })
    }

    return { getState, subscribe, dispatch };
}
//a reducer 
function localReducer(state, action) {
    switch (action.type) {
        case constants.INCREMENT:
            return state + 1;
        default:
            return state;
    }
};

let store = createStore(localReducer, 0);
store.subscribe(() => {
    console.log(`my new state is ${store.getState()}`);
})
store.dispatch({ type: constants.INCREMENT });
store.dispatch({ type: constants.INCREMENT });
store.dispatch({ type: constants.INCREMENT });
store.dispatch({ type: constants.INCREMENT });
store.dispatch({ type: constants.INCREMENT });