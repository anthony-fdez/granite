import { IHoverCardPropsOptional, IHoverCardProps } from "./HoverCard.types";
import { IStyles } from "../ThemeProvider/Interfaces/IStyles";

export const HOVER_CARD_DEFAULT_PROPS: IHoverCardPropsOptional = {
  animated: true,
  animationDuration: 500,
  closeDelay: 0,
  openDelay: 200,
  position: "top",
  zIndex: 5000,
  disabled: false,
  height: undefined,
  width: 300,
};

interface Props {
  props: IHoverCardProps;
  styles: IStyles;
}

export const useHoverCardDefaultProps = ({ props, styles }: Props): IHoverCardProps => {
  const defaultProps = styles.components?.HoverCard;

  if (!defaultProps) return { ...props };

  return {
    ...styles.global,
    ...defaultProps,
    ...props,
  };
};
