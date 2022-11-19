import { IState } from "./IState";

export interface IProviderProps extends IState {
  children: JSX.Element;
  theme?: "light" | "dark";
}
