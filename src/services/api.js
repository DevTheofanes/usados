import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://147.182.225.84/',
  headers: { 'Access-Control-Allow-Origin': '*' },
});

export default api;
