import { combineReducers } from 'redux';

import constants from '../constants/constants';
import activeCategory from './activeCategory';
import products from './products';
import shoppingCart from './shoppingCart';

/* That is an sample with complex reducers */
//let reducer = combineReducers({ activeCategory, products, shoppingCart });

let initState = 0;

function count(state = initState, action) {
    switch (action.type) {
        case constants.INCREMENT:
            return state + 1;

        default:
            return state;
    }
}

let reducer = combineReducers({ count, activeCategory }); //this is the same as {count:count}

export default reducer;