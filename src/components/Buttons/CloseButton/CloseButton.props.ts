import { IStyles } from "./../../Theming/ThemeProvider/Interfaces/IStyles";
import { ICloseButtonProps } from "./CloseButton.types";

export const CLOSE_BUTTON_DEFAULT_PROPS: ICloseButtonProps = {
  size: 35,
};

interface Props {
  props: ICloseButtonProps;
  styles: IStyles;
}

export const useCloseButtonDefaultProps = ({ props, styles }: Props) => {
  const defaultProps = styles.components?.CloseButton;

  if (!defaultProps) return { ...props };

  return {
    ...styles.global,
    ...defaultProps,
    ...props,
  };
};