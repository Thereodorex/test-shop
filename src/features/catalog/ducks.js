import { createAction, createReducer } from 'redux-act';

export const FETCH_PHONES = 'FETCH_PHONES';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SET_PHONES = 'SET_PHONES';
export const SET_CATEGORIES = 'SET_CATEGORIES';

export const fetchPhonesAction = createAction(FETCH_PHONES);
export const fetchCategoriesAction = createAction(FETCH_CATEGORIES);
export const setPhonesAction = createAction(SET_PHONES);
export const setCategoriesAction = createAction(SET_CATEGORIES);

export const catalogReducer = createReducer(
  {
    [setPhonesAction]: (state, phones) => ({...state, phones}),
    [setCategoriesAction]: (state, categories) => ({...state, categories})
  },
  {
    phones: [],
    categories: []
  }
);