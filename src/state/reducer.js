import { createReducer } from "./lib";
import {
  SET_LOADING,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILED,
} from "./action";

const initialState = {
  loading: false,
  data: {},
};

const stateMachine = {
  [SET_LOADING]: payload => ({ loading: payload }),
  [AUTHENTICATE_SUCCESS]: payload => ({ data: payload }),
  [AUTHENTICATE_FAILED]: payload => ({ data: {error: payload} }),
};

export default createReducer(initialState, stateMachine);
