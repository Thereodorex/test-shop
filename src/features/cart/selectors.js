export const cartSelector = (state) => state.cart;

export const countSelector = state => state.cart.reduce((accum, phone) => accum + phone.count, 0);

export const priceSelector = state => state.cart.reduce((accum, phone) => accum + phone.price * phone.count, 0);