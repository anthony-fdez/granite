import { AvailableColorsType } from "./../../constants/theme/colors";
import { SpinnersType } from "./Spinner.types";
import { IStyles } from "./../ThemeProvider/Interfaces/IStyles";
import { SerializedStyles } from "@emotion/react";
interface Props {
    styles: IStyles;
    variant?: SpinnersType;
    color?: AvailableColorsType;
}
export declare const getSpinnerStyles: ({ styles, variant, color }: Props) => SerializedStyles;
export {};
