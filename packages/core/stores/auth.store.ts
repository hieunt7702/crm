import { makeAutoObservable } from "mobx";
import { TokenManager } from "utils";

export class AuthStore {
    isAuthenticated: boolean = false;

    constructor() {
        makeAutoObservable(this);
        this.checkAuth();
    }

    checkAuth = () => {
        const token = TokenManager.getAccessToken();
        this.isAuthenticated = !!token;
    };

    login = (accessToken: string, refreshToken: string) => {
        TokenManager.setTokens(accessToken, refreshToken);
        this.isAuthenticated = true;
    };

    logout = () => {
        TokenManager.clear();
        this.isAuthenticated = false;
    };
}
