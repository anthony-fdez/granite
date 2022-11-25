/// <reference types="react" />
import { IStyles } from "./IStyles";
export interface IProviderProps extends IStyles {
    children: JSX.Element | JSX.Element[];
}
