import { IBackdropProps } from "./Backdrop.types";
import { IStyles } from "../ThemeProvider/Interfaces/IStyles";

export const BACKDROP_DEFAULT_PROPS: IBackdropProps = {
  isOpen: false,
  backdropBlur: 0,
  backdropOpacity: 0.5,
  zIndex: undefined,
  animated: true,
  animationDuration: 500,
};

interface Props {
  props: IBackdropProps;
  styles: IStyles;
}

export const useBackdropDefaultProps = ({ props, styles }: Props): IBackdropProps => {
  const defaultProps = styles.components?.Backdrop;

  if (!defaultProps) return { ...props };

  return {
    ...styles.global,
    ...defaultProps,
    ...props,
  };
};
