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
  closeButton?: boolean;
  closeOnClickOutside?: boolean;
  backdrop?: boolean;
  backdropOpacity?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  backdropBlur?: number;
  animated?: boolean;
  animationDuration?: number;
  width?: number | string;
  height?: number | string;
  padding?: number;
  borderRadius?: ISizes;
  zIndex?: number;
  border?: boolean;
  borderColor?: string;
  borderWidth?: number;
  position?: DialogPositionTypes;
  animation?: DialogAnimationTypes;
  unmount?: boolean;
}

export interface IDialogProps extends IDialogPropsOptional {
  children: JSX.Element | JSX.Element[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
}
