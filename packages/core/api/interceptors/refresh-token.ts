import axios from "axios";
import { AppConfig } from "context";
import { TokenManager } from "utils";

let isRefreshing = false;
let queue: Array<(token: string) => void> = [];
let configRef: AppConfig;

export function setupRefreshConfig(config: AppConfig) {
    configRef = config;
}

export async function refreshToken(): Promise<string> {
    if (isRefreshing) {
        return new Promise((resolve) => queue.push(resolve));
    }

    isRefreshing = true;

    try {
        const res = await axios.post(
            `${configRef.apiBaseUrl}/auth/refresh`,
            { refreshToken: TokenManager.getRefreshToken() }
        );

        const { accessToken, refreshToken } = res.data;
        TokenManager.setTokens(accessToken, refreshToken);

        queue.forEach((cb) => cb(accessToken));
        queue = [];

        return accessToken;
    } finally {
        isRefreshing = false;
    }
}
