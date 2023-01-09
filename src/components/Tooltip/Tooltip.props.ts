import { IStyles } from "../ThemeProvider/Interfaces/IStyles";
import { ITooltipProps, ITooltipPropsOptional } from "./Tooltip.types";

export const TOOLTIP_DEFAULT_PROPS: ITooltipPropsOptional = {
  animated: true,
  animationDuration: 500,
  closeDelay: 500,
  openDelay: 0,
  position: "top",
  zIndex: 5000,
};

interface Props {
  props: ITooltipProps;
  styles: IStyles;
}

export const useTooltipDefaultProps = ({ props, styles }: Props): ITooltipProps => {
  const defaultProps = styles.components?.Tooltip;

  if (!defaultProps) return { ...props };

  return {
    ...styles.global,
    ...defaultProps,
    ...props,
  };
};
