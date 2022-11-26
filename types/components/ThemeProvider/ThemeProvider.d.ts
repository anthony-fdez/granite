import React from "react";
import { IContext } from "./Interfaces/IStyles";
import { IProviderProps } from "./Interfaces/IProviderProps";
export declare const StateContext: React.Context<IContext>;
declare const ThemeProvider: ({ children, theme, primaryColor, }: IProviderProps) => JSX.Element;
export default ThemeProvider;
