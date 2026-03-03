import { logRequest, logResponse, refreshToken, retryInterceptor, setupRefreshConfig } from "api/interceptors";
import axios, { AxiosInstance } from "axios";
import { AppConfig } from "context";
import { TokenManager } from "utils";

let http: AxiosInstance | null = null;

export function initHttpClient(config: AppConfig) {
    setupRefreshConfig(config);

    http = axios.create({
        baseURL: config.apiBaseUrl,
        timeout: config.apiTimeout,
        headers: {
            "Content-Type": "application/json"
        }
    });

    (http.defaults as any).__axiosInstance = http;

    // Request
    http.interceptors.request.use((req) => {
        const token = TokenManager.getAccessToken();
        if (token) {
            req.headers.Authorization = `Bearer ${token}`;
        }

        logRequest(req, config.apiDebug);
        return req;
    });

    // Response
    http.interceptors.response.use(
        (res) => {
            logResponse(res, config.apiDebug);
            return res.data;
        },
        async (error) => {
            const original = error.config;

            if (error.response?.status === 401 && !original._retry) {
                original._retry = true;
                const token = await refreshToken();
                original.headers.Authorization = `Bearer ${token}`;
                return http!(original);
            }

            return Promise.reject(error);
        }
    );

    // Retry
    http.interceptors.response.use(
        (res) => res,
        retryInterceptor(3, 1500)
    );
}

export function getHttp() {
    if (!http) {
        throw new Error("HttpClient not initialized");
    }
    return http;
}
