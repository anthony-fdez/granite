export interface IFlexProps extends React.HTMLAttributes<HTMLDivElement> {
  alignItems?: "flex-start" | "flex-end" | "center";
  children: JSX.Element | JSX.Element[];
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-around" | "space-between" | "space-evenly";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
}
