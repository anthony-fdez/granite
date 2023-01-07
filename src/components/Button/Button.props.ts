import { IStyles } from "../ThemeProvider/Interfaces/IStyles";
import { IButtonProps, IButtonPropsOptional } from "./Button.types";

export const BUTTON_DEFAULT_PROPS: IButtonPropsOptional = {
  variant: "filled",
  padding: 10,
  margin: 5,
  loading: false,
  spinnerVariant: "circular",
  align: "center",
  disabled: false,
  fullWidth: false,
  shade: 6,
};

interface Props {
  props: IButtonProps;
  styles: IStyles;
}

export const useButtonDefaultProps = ({ props, styles }: Props): IButtonProps => {
  const defaultProps = styles.components?.Button;

  if (!defaultProps) return { ...props };

  return {
    ...styles.global,
    ...defaultProps,
    ...props,
  };
};
