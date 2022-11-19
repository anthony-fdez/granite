import { IColors } from "./../constants/colors";

export type numberRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface IState {
  theme?: "dark" | "light";
  primaryColor: IColors["colors"];
  primaryShade: numberRange;
}

export interface IContext {
  state: IState;
  setState: (state: IState) => void;
}
