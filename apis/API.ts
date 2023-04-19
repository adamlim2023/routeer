import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: process.env.API_BASE_URI,
};

const API: AxiosInstance = axios.create(config);

export default API;
