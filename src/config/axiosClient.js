import axios from "axios";

const token = localStorage.getItem('token')

const URL_BASE = import.meta.env.VITE_URL_BASE;

const axiosClient = axios.create({
  baseURL: URL_BASE,
  hedears: {
    'access-token': token,
    'Content-Type': 'application/json; charset=UTF-8',
  }
});

export default axiosClient
