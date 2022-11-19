/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useEffect, useState } from "react";
import { IState, IContext } from "./IState";
import { IProviderProps } from "./IProviderProps";

const defaultState: IState = { theme: "dark" };

export const StateContext = createContext<IContext>({
  state: defaultState,
  setState: () => {},
});

const ThemeProvider = ({
  children,
  theme = defaultState.theme,
}: IProviderProps): JSX.Element => {
  const [state, setState] = useState<IState>(defaultState);

  const handleUpdateState = (newState: IState) => {
    setState({ ...state, ...newState });
  };

  useEffect(() => {
    handleUpdateState({ theme });
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <StateContext.Provider value={{ state, setState: handleUpdateState }}>
        {children}
      </StateContext.Provider>
    </>
  );
};

export default ThemeProvider;
