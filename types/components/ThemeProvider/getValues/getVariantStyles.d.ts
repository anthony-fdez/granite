import { SerializedStyles } from "@emotion/react";
import { VariantsType } from "../../../types/variants";
export interface Props {
    light: SerializedStyles;
    filled: SerializedStyles;
    outlined: SerializedStyles;
    subtle: SerializedStyles;
    variant: VariantsType;
}
export declare const getVariantStyles: ({ light, filled, outlined, subtle, variant, }: Props) => SerializedStyles;
