export declare const API_ENDPOINTS: {
    readonly auth: {
        readonly login: "/auth/login";
        readonly profile: "/auth/profile";
    };
    readonly user: {
        readonly list: "/users";
        readonly detail: (id: number) => string;
    };
};
