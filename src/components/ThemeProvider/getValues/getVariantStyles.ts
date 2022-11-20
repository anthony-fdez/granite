import { SerializedStyles } from "@emotion/react";
import { variants } from "../../../types/variants";

interface Props {
  light: SerializedStyles;
  filled: SerializedStyles;
  outlined: SerializedStyles;
  subtle: SerializedStyles;
  variant: variants;
}

export const getVariantStyles = ({
  light,
  filled,
  outlined,
  subtle,
  variant,
}: Props) => {
  const DEFAULT = filled;

  if (variant === "filled") return DEFAULT;
  if (variant === "light") return light;
  if (variant === "outlined") return outlined;
  if (variant === "subtle") return subtle;

  return DEFAULT;
};
