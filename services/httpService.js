import axios from "axios";
// @ts-ignore
// import { API_URL } from "@env";

const http = axios.create({
  // baseURL: API_URL,
  baseURL: "https://fakestoreapi.com/",
  timeout: 10000,
  // withCredentials: true,
});

// http.interceptors.request.use(async (config) => {
//   // if (token) {
//   //   config.headers.Authorization = `Bearer ${token}`;
//   // }
//   return config;
// });

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Accept": "application/json",
};

export default class HttpService {
  constructor() {}

  async get(url, params) {
    return http.get(url, params);
  }

  async post(url, data) {
    const response = await http.post(url, data, { headers });
    return response;
  }

  async put(url, data) {
    return http.put(url, data, { headers });
  }

  async delete(url) {
    const response = await http.delete(url, { headers });
    return response;
  }
}
