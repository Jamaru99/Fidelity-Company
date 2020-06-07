import { createAction } from "./lib";
const prefix = "SEARCH_PRODUCTS";

export const [SET_LOADING, setLoading] = createAction(
  `${prefix}.SET_LOADING`
);

export const [REGISTER_CUSTOMER, registerCustomer] = createAction(
  `${prefix}.REGISTER_CUSTOMER`
);

export const [AUTHENTICATE, authenticate] = createAction(
  `${prefix}.AUTHENTICATE`
);
export const [AUTHENTICATE_SUCCESS, authenticateSuccess] = createAction(
  `${prefix}.AUTHENTICATE_SUCCESS`
);
export const [AUTHENTICATE_FAILED, authenticateFailed] = createAction(
  `${prefix}.AUTHENTICATE_FAILED`
);