import { IColors } from "../../constants/theme/colors";

export type SpinnersType = "circular" | "dots";

export interface ISpinnerProps {
  variant?: SpinnersType;
  color?: IColors;
  size?: number;
  backgroundAccentColor?: string;
}
