import { IColors } from "../../constants/theme/colors";

export type SpinnersType = "circular" | "dots";

export interface ISpinnerProps {
  backgroundAccentColor?: string;
  color?: IColors;
  size?: number;
  variant?: SpinnersType;
}
