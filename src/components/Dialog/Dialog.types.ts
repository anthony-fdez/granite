import { SerializedStyles } from "@emotion/react";
import { ISizes } from "../../utils/types/sizes";

export type DialogPositionTypes =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center"
  | "center";

export type DialogAnimationTypes = "fade" | "scale" | "slide-bottom" | "slide-left" | "slide-right" | "slide-top";

export interface IDialogPropsOptional extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
  animation?: DialogAnimationTypes;
  animationDuration?: number;
  backdrop?: boolean;
  backdropBlur?: number;
  backdropOpacity?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  border?: boolean;
  borderColor?: string;
  borderRadius?: ISizes;
  borderWidth?: number;
  closeButton?: boolean;
  closeOnClickOutside?: boolean;
  customCSS?: SerializedStyles;
  height?: number | string;
  padding?: number;
  position?: DialogPositionTypes;
  unmount?: boolean;
  width?: number | string;
  zIndex?: number;
}

export interface IDialogProps extends IDialogPropsOptional {
  children: JSX.Element | JSX.Element[];
  isOpen: boolean;
  onClose: () => void;
  title: string;
}
