export declare class AuthStore {
    isAuthenticated: boolean;
    constructor();
    checkAuth: () => void;
    login: (accessToken: string, refreshToken: string) => void;
    logout: () => void;
}
