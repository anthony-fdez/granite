import { AvailableColorsType } from "../../constants/theme/colors";
import { IStyles } from "../ThemeProvider/Interfaces/IStyles";
import { VariantsType } from "../../types/variants";
interface Props {
    styles: IStyles;
    variant: VariantsType;
    color: AvailableColorsType;
}
export declare const getButtonStyles: ({ styles, variant, color }: Props) => import("@emotion/utils").SerializedStyles;
export {};
