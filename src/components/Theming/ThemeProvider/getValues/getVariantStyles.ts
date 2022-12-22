import { SerializedStyles } from "@emotion/react";
import { IVariants } from "./../../../../types/variants";

export interface Props {
  filled: SerializedStyles;
  outlined: SerializedStyles;
  subtle: SerializedStyles;
  variant?: IVariants;
}

export const getVariantStyles = ({ filled, outlined, subtle, variant }: Props): SerializedStyles => {
  const DEFAULT = filled;

  if (variant === "filled") return DEFAULT;
  if (variant === "outlined") return outlined;
  if (variant === "subtle") return subtle;

  return DEFAULT;
};
