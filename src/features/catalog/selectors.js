import { createSelector } from 'reselect';

export const categoriesSelector = state => state.catalog.categories;

export const phonesSelector = createSelector(
  [
    state => state.catalog.phones.map(phone => ({...phone, count: 0})),
    state => state.cart,
    state => state.filter
  ],
  (phones, cart, filter) => {
    const result = [...phones];
    cart.forEach(phone => {
      if (phone.count > 0) {
        result.find(ph => ph.id === phone.id).count = phone.count;
      }
    })
    if (filter === 'all')
      return phones;
    return phones.filter(phone => phone.categoryId === filter);
  }
)