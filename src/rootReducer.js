import { combineReducers } from 'redux';

import { cartReducer } from './features/cart/ducks';
import { catalogReducer } from './features/catalog/ducks';
import { filterReducer } from './features/filter/ducks';

export const rootReducer = combineReducers(
  {
    cart: cartReducer,
    catalog: catalogReducer,
    filter: filterReducer,
  }
);