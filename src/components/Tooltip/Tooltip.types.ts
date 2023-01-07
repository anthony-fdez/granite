export type TooltipPositionsType = "top" | "bottom" | "right" | "left";

export interface ITooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
  children: JSX.Element | JSX.Element[];
  delay?: number;
  label: string;
  position?: TooltipPositionsType;
}
