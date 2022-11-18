import React, { createContext, useContext } from "react";
import { IState } from "./IState";

export const State = createContext<IState>({
  theme: "dark",
});

interface Props {
  children: JSX.Element;
}

const ThemeProvider = ({ children }: Props): JSX.Element => {
  const state = useContext(State);

  if (!state) {
    throw new Error("<ThemeProvider> Is missing");
  }

  return (
    <>
      <State.Provider value={state}>{children}</State.Provider>
    </>
  );
};

export default ThemeProvider;
