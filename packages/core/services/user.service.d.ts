import type { UserModel } from "../models/user.model";
export declare class UserService {
    static getUsers(signal?: AbortSignal): Promise<import("axios").AxiosResponse<UserModel[], any, {}>>;
}
