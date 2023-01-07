export type TooltipPositionsType = "top" | "bottom" | "right" | "left";

export interface ITooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
  label: string;
  position?: TooltipPositionsType;
  delay?: number;
  animated?: boolean;
}
