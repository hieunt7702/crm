import { AuthStore } from "./auth.store"
import { UserStore } from "./user.store"

export class RootStore {
    userStore = new UserStore()
    authStore = new AuthStore()
}
