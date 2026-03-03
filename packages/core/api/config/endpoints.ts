export const API_ENDPOINTS = {
    auth: {
        login: "/auth/login",
        profile: "/auth/profile"
    },
    user: {
        list: "/users",
        detail: (id: number) => `/users/${id}`
    }
} as const;
