import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import {
  AUTHENTICATE,
  authenticateSuccess,
  authenticateFailed,
  setLoading,
  REGISTER_COMPANY
} from "./action";

import { 
  authenticate as authenticateCompanyService,
  register as registerCompanyService
} from "@services";

import { texts } from '@utils';

function* authenticate(action){
  try {
    const { data } = yield call(authenticateCompanyService, action.payload);
    yield put(authenticateSuccess(data));
    action.payload.navigation.navigate("BottomTabNavigator");
  }
  catch(err) {
    console.log(err.message)
    if(err.message.includes("401"))
      yield put(authenticateFailed(texts.login["error:incorrect_password"]));
    else if(err.message.includes("404"))
      yield put(authenticateFailed(texts.login["error:user_not_found"]));
    else
      yield put(authenticateFailed(texts.generic_error));
  }
}

function* registerCompany(action){
  
  try{
    const { data } = yield call(registerCompanyService, action.payload);
    yield put(authenticateSuccess(data));
  } catch(err) {
    console.log(err.message);
  }
}

// SAGA
export default function* saga() {
  yield takeLatest(AUTHENTICATE, authenticate);
  yield takeLatest(REGISTER_COMPANY, registerCompany);
}
