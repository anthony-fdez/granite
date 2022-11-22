/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useEffect, useState } from "react";
import { IStyles, IContext } from "./Interfaces/IStyles";
import { IProviderProps } from "./Interfaces/IProviderProps";
import {
  defaultStylesDark,
  defaultStylesLight,
} from "../../constants/theme/defaultStyles";

export const StateContext = createContext<IContext>({
  styles: defaultStylesLight,
  setState: () => {},
});

const ThemeProvider = ({
  children,
  theme,
  primaryColor,
}: IProviderProps): JSX.Element => {
  const [styles, setStyles] = useState<IStyles>(defaultStylesLight);

  const handleUpdateState = (newState: IStyles) => {
    setStyles({ ...styles, ...newState });
  };

  useEffect(() => {
    const getDefaultStyles = (): IStyles => {
      if (theme === "dark") return defaultStylesDark;

      return defaultStylesLight;
    };

    handleUpdateState({ ...getDefaultStyles(), theme, primaryColor });
  }, [theme, primaryColor]);

  return (
    <>
      <StateContext.Provider value={{ styles, setState: handleUpdateState }}>
        {children}
      </StateContext.Provider>
    </>
  );
};

export default ThemeProvider;
