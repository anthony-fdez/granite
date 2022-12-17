import { ISizes } from "../../../types/sizes";

export interface IModalPropsOptional
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  closeButton?: boolean;
  closeOnClickOutside?: boolean;
  backdropOpacity?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  animated?: boolean;
  animationDuration?: number;
  width?: number | string;
  height?: number | string;
  centered?: boolean;
  padding?: number;
  borderRadius?: ISizes;
  backdropBlur?: number;
  zIndex?: number;
  border?: boolean;
  borderColor?: string;
  borderWidth?: number;
  unmount?: boolean;
}

export interface IModalProps extends IModalPropsOptional {
  children: JSX.Element | JSX.Element[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
}
