import { IStyles } from "../../Theming/ThemeProvider/Interfaces/IStyles";
import { IButtonProps, IButtonPropsOptional } from "./Button.types";

// Every component will have their own default props.
// They will not have duplicate default props with the global props. For example,
// border radius is set globally and applied to every component, so no need to add it here.
// Globally defined styles will override component styles if not passed by the user

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

export const useButtonDefaultProps = ({
  props,
  styles,
}: Props): IButtonProps => {
  const defaultProps = styles.components?.Button;

  if (!defaultProps) return { ...props };

  return {
    ...styles.global,
    ...defaultProps,
    ...props,
  };
};
