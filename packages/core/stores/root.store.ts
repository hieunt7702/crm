import { AuthStore } from "./auth.store"
import { EmployeeStore } from "./employee.store"
import { UserStore } from "./user.store"

export class RootStore {
    userStore = new UserStore()
    authStore = new AuthStore()
    employeeStore = new EmployeeStore()
}
