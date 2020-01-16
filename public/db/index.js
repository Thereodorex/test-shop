import phones from 'api/mockPhones'
import categories from 'api/mockCategories'

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