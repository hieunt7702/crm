import { RequestCanceler } from "api";
import { makeAutoObservable, runInAction } from "mobx";
import { UserModel } from "models";
import { UserService } from "services";

export class UserStore {
    users: UserModel[] = [];
    loading = false;
    error: string | null = null;

    private canceler = new RequestCanceler();

    constructor() {
        makeAutoObservable(this);
    }

    fetchUsers = async () => {
        this.loading = true;
        this.error = null;

        try {
            const resAPI = await UserService.getUsers(this.canceler.signal);

            runInAction(() => {
                this.users = resAPI?.data;
            });
        } catch (err: any) {
            if (err.name === "CanceledError") return;

            runInAction(() => {
                this.error = err.message || "Load users failed";
            });
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    cancelFetch() {
        this.canceler.cancel();
    }
}
