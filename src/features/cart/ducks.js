import { createAction, createReducer } from 'redux-act';

export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const SET_COUNT = 'SET_COUNT';

export const addAction = createAction(ADD);
export const deleteAction = createAction(DELETE);
export const setCountAction = createAction(SET_COUNT);

export const cartReducer = createReducer(
  {
    [addAction]: (state, phone) => {
      if (state.find(current => current.id === phone.id))
        return state;
      return [...state, {...phone, count: 1}]
    },
    [deleteAction]: (state, id) => state.filter(phone => phone.id !== id),
    [setCountAction]: (state, {id, count}) => {
      if (count > 9)
        return state;
      if (count === 0)
        return state.filter(phone => phone.id !== id);
      return state.map(phone => {
        if (phone.id === id) {
          return {...phone, count};
        }
        return phone;
      })
    },
  },
  []
);