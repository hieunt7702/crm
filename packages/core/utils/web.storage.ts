import { StorageAdapter } from "./storage";

export const webStorage: StorageAdapter = {
    get: async (k) => localStorage.getItem(k),
    set: async (k, v) => localStorage.setItem(k, v),
}
