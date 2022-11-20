import { IColors } from "../constants/colors";

export type numberRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface IStyles {
  theme?: "dark" | "light";
  primaryColor?: IColors["colors"];
  primaryShade?: numberRange;
}

export interface IContext {
  styles: IStyles;
  setState: (state: IStyles) => void;
}
