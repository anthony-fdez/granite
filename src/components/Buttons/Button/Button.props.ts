import { IStyles } from "../../Theming/ThemeProvider/Interfaces/IStyles";
import { IButtonProps } from "./Button.types";

export const BUTTON_DEFAULT_PROPS: IButtonProps = {
  children: "",
  variant: "filled",
  color: "blue",
  padding: 50,
  margin: 10,
  loading: false,
  spinnerVariant: "circular",
};

interface Props {
  props: IButtonProps;
  styles: IStyles;
}

export const useButtonDefaultProps = ({ props, styles }: Props) => {
  const s = styles.components?.Button;

  return {
    variant: props.variant || s?.variant,
  };
};
