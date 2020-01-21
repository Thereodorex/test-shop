import phones from './phones';
import categories from './categories';

export const fetchPhones = async () => {
  return new Promise((resolve, reject) => {
    resolve(phones)
  })
}

export const fetchCategories = async () => {
  return new Promise((resolve, reject) => {
    resolve(categories)
  })
}