import { AvailableColorsType } from "./../../constants/theme/colors";
export type SpinnersType = "circular" | "dots";

export interface ISpinnerProps {
  variant?: SpinnersType;
  color?: AvailableColorsType;
  size?: number;
}
