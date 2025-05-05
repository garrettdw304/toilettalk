import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9500/api',
  withCredentials: true
});

export default api;
