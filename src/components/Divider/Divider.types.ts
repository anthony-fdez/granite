import { SerializedStyles } from "@emotion/react";

export interface IDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  customCSS?: SerializedStyles;
  dividerVariant?: "dashed" | "solid" | "dotted";
  label?: string;
  labelPadding?: number;
  labelPosition?: "left" | "center" | "right";
  marginBottom?: number;
  marginTop?: number;
  width?: number;
}
