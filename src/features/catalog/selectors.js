import { createSelector } from 'reselect';

// export const phonesSelector = state => state.catalog.phones;

export const categoriesSelector = state => state.catalog.categories;

export const phonesSelector = createSelector(
  [
    state => state.catalog.phones.map(phone => ({...phone, count: 0})),
    state => state.cart,
    state => state.filter
  ],
  (phones, cart, filter) => {
    cart.forEach(phone => {
      if (phone.count > 0) {
        phones.find(ph => ph.id === phone.phone.id).count = phone.count;
      }
    })
    // console.log(phones);
    if (filter === 'all')
      return phones;
    return phones.filter(phone => phone.categoryId === filter);
  }
)