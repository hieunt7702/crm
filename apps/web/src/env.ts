export const ENV = {
    apiBaseUrl: import.meta.env.VITE_API_URL,
    apiTimeout: Number(import.meta.env.VITE_API_TIMEOUT),
    apiDebug: import.meta.env.VITE_API_DEBUG === "true"
};
