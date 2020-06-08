import { get, post, COMPANY_BASE_URL } from '@utils';

export const authenticate = (data) => post(`${COMPANY_BASE_URL}/login`, data);
export const register = (data) => post(`${COMPANY_BASE_URL}/create`, data);