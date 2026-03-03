import type { AxiosError } from "axios";

export function retryInterceptor(retries = 3, delay = 1000) {
    return async (error: AxiosError) => {
        const config: any = error.config;

        if (!config || config.__retryCount >= retries) {
            return Promise.reject(error);
        }

        config.__retryCount = (config.__retryCount || 0) + 1;

        await new Promise((r) => setTimeout(r, delay));

        return config.__axiosInstance(config);
    };
}
