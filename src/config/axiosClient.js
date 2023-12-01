import axios from "axios";

const token = localStorage.getItem('token')

const URL_BASE = import.meta.env.VITE_URL_BASE;

const axiosClient = axios.create({
  baseURL: URL_BASE,
  hedears: {
    'Content-Type': 'application/json; charset=UTF-8',
    'access-token': token,
  }
});

export default axiosClient
