export interface IDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  labelPosition?: "left" | "center" | "right";
  width?: number;
  variant?: "dashed" | "solid" | "dotted";
  labelPadding?: number;
  marginTop?: number;
  marginBottom?: number;
}
