import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://147.182.225.84/',
});

export default api;
