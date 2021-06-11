import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest,call } from "redux-saga/effects";
import { 
  getBusinesses, 
  getBranchItems
} from "./network";

export const actionTypes = {
  GetBusinesses: "GET_BUSINESSES",
  SetBusinesses: "SET_BUSINESSES",
  GetBranchItems: "GET_BRANCH_ITEMS",
  SetBranchItems: "SET_BRANCH_ITEMS",
};

const initialState = {
    all_businesses:[],
    branches_data: []
};

export const mreducer = persistReducer(
  { storage, key: "QR-Buzz-[menu]", whitelist: ["user", "authToken"] },
  (state = initialState, action) => {
    switch (action.type) {
      
      case actionTypes.SetBusinesses: { 
        const { businesses } = action.payload;
        //console.log(businesses);
        return { ...state, all_businesses:businesses  };
      }
      
      case actionTypes.SetBranchItems: { 
        const { data } = action.payload;
        console.log(data);
        return { ...state, branches_data:data  };
      }

      default:
        return state;
    }
  }
);

export const actions = {
    getBusinesses : (user_id) => ({type: actionTypes.GetBusinesses, payload: user_id}),
    setBusinesses : (businesses) => ({type: actionTypes.SetBusinesses, payload: { businesses}}),
    getBranchItems : (id) => ({type: actionTypes.GetBranchItems, payload: id}),
    setBranchItems : (data) => ({type: actionTypes.SetBranchItems, payload: { data}}),
}

export function* mSaga(){

  yield takeLatest(actionTypes.GetBusinesses,  function* getBusinessSaga(action) {
    //console.log(action.payload)
    try {
        const businesses = yield call(getBusinesses,action.payload)
        //console.log(businesses)
        yield put(actions.setBusinesses(businesses.body))
    } catch (error) {
        //fire appropriate action in case of error 
    }
  });

  yield takeLatest(actionTypes.GetBranchItems,  function* getBranchItemsSaga(action) {
    //console.log(action.payload)
    try {
        const data = yield call(getBranchItems,action.payload)
        //console.log(data)
        yield put(actions.setBranchItems(data.body))
    } catch (error) {
        //fire appropriate action in case of error 
    }
  });

}