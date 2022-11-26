export interface IDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: "string";
  labelPosition?: "left" | "center" | "right";
  orientation?: "vertical" | "horizontal";
  width?: number;
  variant?: "dashed" | "solid" | "dotted";
}
