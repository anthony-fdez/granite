import { IStyles } from "./IStyles";

export interface IProviderProps {
  children: JSX.Element;
  theme?: "light" | "dark";
  styles: IStyles;
}
