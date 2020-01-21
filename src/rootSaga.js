import {
  all, fork,
} from 'redux-saga/effects';

import { watchFetchAction } from './features/catalog/sagas';

export function* rootSaga() {
  yield all([
    fork(watchFetchAction),
  ]);
}