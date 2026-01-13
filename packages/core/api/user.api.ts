// core/api/user.api.ts
import { http } from "./http.client"
import { User } from "../models/user.model"

export const getProfile = async (): Promise<User> => {
    const res = await http.get("/me")
    return res.data
}
