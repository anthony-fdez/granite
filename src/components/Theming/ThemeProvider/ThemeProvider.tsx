/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";

/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useEffect, useState } from "react";
import { IStyles, IContext } from "./Interfaces/IStyles";
import { IProviderProps } from "./Interfaces/IProviderProps";
import {
  defaultStylesDark,
  defaultStylesLight,
} from "../../../constants/theme/defaultStyles";
import { getGlobalStyles } from "./ThemeProvider.styles";

export const StateContext = createContext<IContext>({
  styles: defaultStylesLight,
  setState: () => {},
});

const ThemeProvider = ({
  children,
  theme = "light",
  primaryColor = "blue",
  ...args
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
        <Global styles={getGlobalStyles({ styles })} />
        <div {...args}>{children}</div>
      </StateContext.Provider>
    </>
  );
};

export default ThemeProvider;
