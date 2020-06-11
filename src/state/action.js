import { createAction } from "./lib";

export const [SET_LOADING, setLoading] = createAction(
  `SET_LOADING`
);

export const [REGISTER_COMPANY, registerCompany] = createAction(
  `REGISTER_COMPANY`
);

export const [AUTHENTICATE, authenticate] = createAction(
  `AUTHENTICATE`
);

export const [AUTHENTICATE_SUCCESS, authenticateSuccess] = createAction(
  `AUTHENTICATE_SUCCESS`
);

export const [AUTHENTICATE_FAILED, authenticateFailed] = createAction(
  `AUTHENTICATE_FAILED`
);