import { IStyles } from "./../../Theming/ThemeProvider/Interfaces/IStyles";
import { IDialogPropsOptional, IDialogProps } from "./Dialog.types";

export const DIALOG_DEFAULT_PROPS: IDialogPropsOptional = {
  closeButton: true,
  closeOnClickOutside: false,
  backdrop: false,
  backdropOpacity: 0.5,
  backdropBlur: 0,
  animated: true,
  animationDuration: 500,
  width: 350,
  height: undefined,
  padding: 10,
  borderRadius: undefined,
  zIndex: 1001,
  border: true,
  borderColor: undefined,
  borderWidth: 3,
  position: "bottom-right",
  animation: "slide-top",
};

interface Props {
  props: IDialogProps;
  styles: IStyles;
}

export const useDialogDefaultStyles = ({
  props,
  styles,
}: Props): IDialogProps => {
  const defaultProps = styles.components?.Dialog;

  if (!defaultProps) return { ...props };

  return {
    ...styles.global,
    ...defaultProps,
    ...props,
  };
};
