import { IStyles } from "../ThemeProvider/Interfaces/IStyles";
import { IDrawerProps, IDrawerPropsOptional } from "./Drawer.types";

export const DRAWER_DEFAULT_PROPS: IDrawerPropsOptional = {
  closeButton: true,
  closeOnClickOutside: true,
  backdropOpacity: 0.5,
  animated: true,
  animationDuration: 500,
  width: 500,
  padding: 20,
  position: "right",
  borderRadius: undefined,
  backdropBlur: 0,
  zIndex: undefined,
  border: true,
  borderColor: undefined,
  borderWidth: 3,
  unmount: true,
  backdrop: true,
};

interface Props {
  props: IDrawerProps;
  styles: IStyles;
}

export const useDrawerDefaultProps = ({ props, styles }: Props): IDrawerProps => {
  const defaultProps = styles.components?.Drawer;

  if (!defaultProps) return { ...props };

  return {
    ...styles.global,
    ...defaultProps,
    ...props,
  };
};
