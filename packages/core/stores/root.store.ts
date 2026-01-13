// core/stores/root.store.ts
import { UserStore } from "./user.store"

export class RootStore {
    userStore = new UserStore()
}
