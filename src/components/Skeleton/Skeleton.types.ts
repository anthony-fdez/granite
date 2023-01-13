import { SerializedStyles } from "@emotion/react";
import { ISizes } from "../../utils/types/ISizes";

export interface ISkeletonPropsOptional {
  animationSpeed?: number;
  baseColor?: string;
  borderRadius?: ISizes;
  circle?: boolean;
  count?: number;
  customCSS?: SerializedStyles;
  height?: string | number;
  highlightColor?: string;
  marginBottom?: number;
  width?: string | number;
}
