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
      // console.log(state);
      if (state.find(current => current.phone.id === phone.id))
        return state;
      return [...state, {phone, count: 1}]
    },
    [deleteAction]: (state, id) => state.filter(phone => phone.phone.id !== id),
    [setCountAction]: (state, {id, count}) => {
      if (count > 9)
        return state;
      if (count === 0) { 
        const res = state.filter(phone => phone.phone.id !== id);
        // console.log(res);
        return res;
      }
      return state.map(phone => {
        if (phone.phone.id === id) {
          // console.log(count);
          return {count, phone: phone.phone};
        }
        return phone;
      })
    },
  },
  []
);