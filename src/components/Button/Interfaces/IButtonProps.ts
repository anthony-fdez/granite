import { numberRange } from "./../../ThemeProvider/Interfaces/IState";
import { IColors, IColorShades } from "./../../ThemeProvider/constants/colors";

export interface IButtonProps {
  children: string;
  color?: IColors["colors"];
  colorShade?: numberRange;
  padding?: number;
  margin?: number;
  borderRadius?: number;
  loading?: boolean;
  fontColor?: "white" | "black" | string;
  width?: number | undefined;
  align?: "start" | "center" | "end";
}
