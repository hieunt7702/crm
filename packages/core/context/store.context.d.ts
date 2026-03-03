import React, { ReactNode } from "react";
import { RootStore } from "../stores/root.store";
interface Props {
    children: ReactNode;
}
export declare const StoreProvider: React.FC<Props>;
export declare const useStore: () => RootStore;
export {};
