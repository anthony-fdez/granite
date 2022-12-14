import { IStyles } from "../../Theming/ThemeProvider/Interfaces/IStyles";
import { IButtonProps, IButtonPropsOptional } from "./Button.types";

export const BUTTON_DEFAULT_PROPS: IButtonPropsOptional = {
  variant: "outlined",
  color: "blue",
  padding: 10,
  margin: 10,
  loading: false,
  spinnerVariant: "circular",
};

interface Props {
  props: IButtonProps;
  styles: IStyles;
}

export const useButtonDefaultProps = ({
  props,
  styles,
}: Props): IButtonProps => {
  const s = styles.components?.Button;

  if (!s) return { ...props };

  return {
    ...props,
    // variant: props.variant || s.variant,
    variant: "filled",
  };
};
