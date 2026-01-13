// core/stores/user.store.ts
import { makeAutoObservable } from "mobx"
import { getProfile } from "../api/user.api"
import { User } from "../models/user.model"

export class UserStore {
    user: User | null = null
    loading = false

    constructor() {
        makeAutoObservable(this)
    }

    async fetchProfile() {
        this.loading = true
        try {
            this.user = await getProfile()
        } finally {
            this.loading = false
        }
    }
}
