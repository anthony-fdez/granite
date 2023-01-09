export type TooltipPositionsType = "top" | "bottom" | "right" | "left";

export interface ITooltipPropsOptional extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
  animationDuration?: number;
  closeDelay?: number;
  isOpen?: boolean;
  openDelay?: number;
  position?: TooltipPositionsType;
  zIndex?: number;
}

export interface ITooltipProps extends ITooltipPropsOptional {
  children: JSX.Element | JSX.Element[];
  tooltip: JSX.Element;
}
