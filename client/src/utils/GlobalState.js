import React, { createContext, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value=[], ...props }) => {
  return <Provider value={value} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
