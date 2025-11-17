import { store } from "@/redux/store";
import type { ChildrenProps } from "@/types";
import React from "react";
import { Provider } from "react-redux";

const AppProvider: React.FC<ChildrenProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
