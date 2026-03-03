import { UserModel } from "models";
export declare class UserStore {
    users: UserModel[];
    loading: boolean;
    error: string | null;
    private canceler;
    constructor();
    fetchUsers: () => Promise<void>;
    cancelFetch(): void;
}
