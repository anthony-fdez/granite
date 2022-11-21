import { IStyles } from "../ThemeProvider/Interfaces/IStyles";
import { VariantsType } from "../../types/variants";
interface Props {
    styles: IStyles;
    variant: VariantsType;
}
export declare const getButtonStyles: ({ styles, variant }: Props) => import("@emotion/utils").SerializedStyles;
export {};
