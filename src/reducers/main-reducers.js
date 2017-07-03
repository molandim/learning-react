import { combineReducers } from 'redux';

import constants from '../constants/constants';
import activeCategory from './activeCategory';
import products from './products';
import shoppingCart from './shoppingCart';


/*export default function reducer(state = initialState, action) {
  combineReducers(activateCategory, products, shoppingCart);
}*/

let reducer = combineReducers(activeCategory, products, shoppingCart);
export default reducer;

/*let s = reducer(initialState, { type: constants.CHANGE_CATEGORY, payload: 'noting' });
s = reducer(s, { type: constants.ADD_TO_CART, payload: { id: 232, name: 'pearl', cost: 200 } });

console.log(s);*/