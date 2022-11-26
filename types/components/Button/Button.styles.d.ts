import { AvailableColorsType } from "../../constants/theme/colors";
import { IStyles } from "../ThemeProvider/Interfaces/IStyles";
import { SerializedStyles } from "@emotion/react";
import { VariantsType } from "../../types/variants";
interface Props {
    styles: IStyles;
    variant: VariantsType;
    color?: AvailableColorsType;
    disabled?: boolean;
}
export declare const getButtonStyles: ({ styles, variant, color, disabled, }: Props) => SerializedStyles | null;
export {};
