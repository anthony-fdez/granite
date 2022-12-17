import { IStyles } from "./../../Theming/ThemeProvider/Interfaces/IStyles";
import { IModalPropsOptional, IModalProps } from "./Modal.types";

export const MODAL_DEFAULT_PROPS: IModalPropsOptional = {
  closeButton: true,
  closeOnClickOutside: true,
  backdropOpacity: 0.5,
  animated: true,
  animationDuration: 500,
  width: 500,
  height: undefined,
  centered: false,
  padding: 20,
  borderRadius: undefined,
  backdropBlur: 0,
  zIndex: undefined,
  border: true,
  borderColor: undefined,
  borderWidth: 3,
  unmount: true,
};

interface Props {
  props: IModalProps;
  styles: IStyles;
}

export const useModalDefaultProps = ({ props, styles }: Props): IModalProps => {
  const defaultProps = styles.components?.Modal;

  if (!defaultProps) return { ...props };

  return {
    ...styles.global,
    ...defaultProps,
    ...props,
  };
};
