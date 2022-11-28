export interface IFlexProps extends React.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
}
