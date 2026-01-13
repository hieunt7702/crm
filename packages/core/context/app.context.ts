// core/context/app.context.ts
import { createContext } from "react"
import { RootStore } from "../stores/root.store"

export const AppContext = createContext<RootStore | null>(null)
