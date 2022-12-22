export interface IDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  labelPosition?: "left" | "center" | "right";
  width?: number;
  dividerVariant?: "dashed" | "solid" | "dotted";
  labelPadding?: number;
  marginTop?: number;
  marginBottom?: number;
}
