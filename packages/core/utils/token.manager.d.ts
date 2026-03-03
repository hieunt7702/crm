export declare const TokenManager: {
    getAccessToken(): string | null;
    getRefreshToken(): string | null;
    setTokens(access: string, refresh: string): void;
    clear(): void;
};
