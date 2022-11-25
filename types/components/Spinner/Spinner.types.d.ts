import { AvailableColorsType } from "./../../constants/theme/colors";
export declare type SpinnersType = "circular" | "dots";
export interface ISpinnerProps {
    variant?: SpinnersType;
    color?: AvailableColorsType;
}
