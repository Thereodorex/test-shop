import {
  all, call, put, takeEvery
} from 'redux-saga/effects';

import { api } from './api';
import { fetchPhonesAction, fetchCategoriesAction, setPhonesAction, setCategoriesAction } from './ducks';

function* fetchCategoriesSaga() {
  const categories = yield call(api.fetchCategories);
  yield put(setCategoriesAction(categories));
}

function* fetchPhonesSaga() {
  const phones = yield call(api.fetchPhones);
  yield put(setPhonesAction(phones));
}

export function* watchFetchAction() {
  yield all([
    takeEvery(fetchPhonesAction, fetchPhonesSaga),
    takeEvery(fetchCategoriesAction, fetchCategoriesSaga),
    fetchPhonesSaga(),
    fetchCategoriesSaga()
  ]);
}