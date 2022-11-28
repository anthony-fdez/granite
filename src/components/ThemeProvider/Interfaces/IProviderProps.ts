import { IStyles } from "./IStyles";

export interface IProviderProps
  extends IStyles,
    React.HtmlHTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
}
