import React from "react";
import { IState } from "./IState";
export declare const State: React.Context<IState>;
interface Props {
    children: JSX.Element;
}
declare const ThemeProvider: ({ children }: Props) => JSX.Element;
export default ThemeProvider;
