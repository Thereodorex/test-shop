import { createAction, createReducer } from 'redux-act';

export const USE_FILTER = 'USE_FILTER';

export const setFilterAction = createAction(USE_FILTER);

export const filterReducer = createReducer(
  {
    [setFilterAction]: (state, id) => id,
  },
  'all'
); 