import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import {
  REGISTER_CUSTOMER,
  AUTHENTICATE,
  authenticateSuccess,
  authenticateFailed,
  setLoading
} from "./action";
import { 
  authenticate as authenticateCustomerService,
  register as registerCustomerService 
} from "@services/customer";

import { 
  authenticate as authenticateCompanyService,
  register as registerCompanyService
} from "@services/company";

import texts from '@texts';

function* authenticate(action){
  try{
    yield authenticateCustomer(action);
  } catch(err) {
    if(err.message.includes("401"))
      yield put(authenticateFailed(texts.login["error:incorrect_password"]));
    else
      yield put(authenticateFailed(err.message));
  }
}

function* authenticateCustomer(action){
    const { data } = yield call(authenticateCustomerService, action.payload);
    yield put(authenticateSuccess(data));
    action.payload.navigation.navigate("Main");
}

function* authenticateCompany(action){
  try {
    const { data } = yield call(authenticateCompanyService, action.payload);
    console.log(data);
    yield put(authenticateSuccess(data));
    action.payload.navigation.navigate("Main");
  }
  catch(err) {
    if(err.message.includes("401"))
      yield put(authenticateFailed(texts.login["error:incorrect_password"]));
    else
      yield put(authenticateFailed(texts.login["error:user_not_found"]));
    console.log(err.message);
  }
}

function* registerCustomer(action){
  
  try{
    console.log(action.payload)
    const { data } = yield call(registerCustomerService, action.payload);
    console.log(data);
    yield put(authenticateSuccess(data));
  } catch(err) {
    console.log(err.message);
  }
}

// SAGA
export default function* saga() {
  yield takeLatest(AUTHENTICATE, authenticate);
  yield takeLatest(REGISTER_CUSTOMER, registerCustomer);
}
