import { IStyles } from "../components/ThemeProvider/Interfaces/IStyles";
import { AvailableColorsType } from "../constants/theme/colors";
import { VariantsType } from "../types/variants";
interface Props {
    color?: AvailableColorsType;
    styles: IStyles;
    variant: VariantsType;
}
export declare const useGetColors: ({ color, styles, variant, }: Props) => {
    BG_COLOR: string;
    BG_COLOR_HOVER: string;
    FONT_COLOR: string;
};
export {};
