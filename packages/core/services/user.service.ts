import { API_ENDPOINTS, getHttp } from "api";
import type { UserModel } from "../models/user.model";

export class UserService {
    static getUsers(signal?: AbortSignal) {
        return getHttp().get<UserModel[]>(API_ENDPOINTS.user.list, {
            signal
        });
    }
}
