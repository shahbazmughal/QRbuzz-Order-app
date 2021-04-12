import {all} from "redux-saga/effects";
import {combineReducers} from "redux";

//import * as auth from "../app/modules/Auth/_redux/authRedux";
//import * as business from '../app/pages/Business/_redux/businessRedux';
//import * as offers from '../app/pages/Offers/_redux/offersRedux';
//import * as subscribers from '../app/pages/Subscribers/_redux/subscribersRedux';
import * as dashboard from '../app/pages/Dashboard/_redux/dashboardRedux';
//import * as campaigns from '../app/pages/Campaigns/_redux/campRedux';
//import * as menus from '../app/pages/Menu/_redux/menuRedux';
//import * as staff from '../app/pages/Staff/_redux/staffRedux';

export const rootReducer = combineReducers({
  //auth: auth.reducer,
  //business: business.breducer,
  //offers : offers.ofreducer,
  //subscribers : subscribers.sreducer,
  dashboard: dashboard.preducer,
  //campaigns: campaigns.campreducer,
  //menus: menus.mreducer,
  //staff:staff.staffreducer
});

export function* rootSaga() {
  yield all([dashboard.pSaga()]);
}
