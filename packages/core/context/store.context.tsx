import React, { createContext, ReactNode, useContext } from "react";
import { RootStore } from "../stores/root.store";

const rootStore = new RootStore();
const StoreContext = createContext<RootStore>(rootStore);

interface Props {
  children: ReactNode;
}

export const StoreProvider: React.FC<Props> = ({ children }) => {
  return (
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
