import { IStyles } from "../ThemeProvider/Interfaces/IStyles";
import { ILoadingOverlayProps, ILoadingOverlayPropsOptional } from "./LoadingOverlay.types";

export const LOADING_OVERLAY_DEFAULT_PROPS: ILoadingOverlayPropsOptional = {
  spinnerProps: { size: 30 },
  backdrop: true,
  backdropBlur: 0,
  backdropOpacity: 0.5,
  animated: true,
  animationDuration: 200,
  fullScreen: false,
};

interface Props {
  props: ILoadingOverlayProps;
  styles: IStyles;
}

export const useLoadingOverlayDefaultProps = ({ props, styles }: Props): ILoadingOverlayProps => {
  const defaultProps = styles.components?.LoadingOverlay;

  if (!defaultProps) return { ...props };

  return {
    ...styles.global,
    ...defaultProps,
    ...props,
  };
};
