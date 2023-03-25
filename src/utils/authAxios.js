import axios from "axios";
import { storageGetItem, storageSetItem, storageDeleteItem } from "./storage";

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

authAxios.interceptors.response.use(
  async (resp) => {
    return resp;
  },
  async (error) => {
    // if (!(error instanceof AxiosError)) return Promise.reject(error);
    if (error.response?.status === 401 || error.response?.status === 403) {
      const refreshToken = storageGetItem("refreshToken");

      console.log("authAxios.interceptors", { refreshToken });

      if (!refreshToken) {
        return Promise.reject(error);
      }

      try {
        const { data } = await axios.post(
          `${API_URL}/account/refresh/`,
          {
            refresh: refreshToken,
          },
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        );

        // store.dispatch(updateTokens({ refreshToken, accessToken: data.accessToken }));
        storageSetItem("accessToken", data.access);
        const config = {
          ...error.config,
          headers: {
            ...(error.config?.headers ?? {}),
            Authorization: `Bearer ${data.access}`,
          },
        };

        return await axios(config);
      } catch (_) {
        if (typeof window != "undefined") {
          window.location.href = "/auth/login";
        }
        storageDeleteItem("accessToken");
        storageDeleteItem("refreshToken");
        storageDeleteItem("user");
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
