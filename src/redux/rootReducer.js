import {all} from "redux-saga/effects";
import {combineReducers} from "redux";

import * as menu from '../app/pages/_redux/menuRedux';

export const rootReducer = combineReducers({
  menu: menu.mreducer,
});

export function* rootSaga() {
  yield all([menu.mSaga()]);
}
