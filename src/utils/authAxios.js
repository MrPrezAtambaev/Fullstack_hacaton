import axios from "axios";
import { storageGetItem } from "./storage";

export const API_URL = "http://35.246.210.249/api/v1";

export const authAxios = axios.create({
  baseURL: API_URL,
});

authAxios.interceptors.request.use(
  (config) => {
    const headers = config.headers ?? {};
    const accessToken = storageGetItem("accessToken");
    if (accessToken) {
      headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return {
      ...config,
      headers,
    };
  },
  (error) => Promise.reject(error)
);
