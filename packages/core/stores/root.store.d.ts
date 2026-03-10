import { AuthStore } from "./auth.store";
import { EmployeeStore } from "./employee.store";
import { UserStore } from "./user.store";
export declare class RootStore {
    userStore: UserStore;
    authStore: AuthStore;
    employeeStore: EmployeeStore;
}
