import { SerializedStyles } from "@emotion/react";
import { VariantsType } from "../../../../types/variants";

export interface Props {
  filled: SerializedStyles;
  outlined: SerializedStyles;
  subtle: SerializedStyles;
  variant: VariantsType;
}

export const getVariantStyles = ({
  filled,
  outlined,
  subtle,
  variant,
}: Props) => {
  const DEFAULT = filled;

  if (variant === "filled") return DEFAULT;
  if (variant === "outlined") return outlined;
  if (variant === "subtle") return subtle;

  return console.log("Button is missing prop 'variant'");
};
