import axios from 'axios';

export const BASE_URL = "http://192.168.100.20:3000"
export const COMPANY_BASE_URL = `${BASE_URL}/company`
export const QR_CODE_URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150"
export const get = axios.get
export const post = axios.post
