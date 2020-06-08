import axios from "axios";

const baseUrl = "http://192.168.100.10:3000/customer";

export const authenticate = (data) => axios.post(`${baseUrl}/login`, data);
export const register = (data) => axios.post(`${baseUrl}/create`, data);