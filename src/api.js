import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://34.86.130.34:9500/api',
  baseURL: 'http://localhost:9500/api',
  withCredentials: false
});

export default api;
