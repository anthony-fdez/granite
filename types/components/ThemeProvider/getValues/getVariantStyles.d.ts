import { SerializedStyles } from "@emotion/react";
import { VariantsType } from "../../../types/variants";
export interface Props {
    filled: SerializedStyles;
    outlined: SerializedStyles;
    subtle: SerializedStyles;
    variant: VariantsType;
}
export declare const getVariantStyles: ({ filled, outlined, subtle, variant, }: Props) => SerializedStyles;
