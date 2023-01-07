export interface IDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  dividerVariant?: "dashed" | "solid" | "dotted";
  label?: string;
  labelPadding?: number;
  labelPosition?: "left" | "center" | "right";
  marginBottom?: number;
  marginTop?: number;
  width?: number;
}
