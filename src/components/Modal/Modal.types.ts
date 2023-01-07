import { IBackdropOpacity } from "../Backdrop/Backdrop.types";
import { ISizes } from "../../utils/types/sizes";

export interface IModalPropsOptional extends React.HtmlHTMLAttributes<HTMLDivElement> {
  closeButton?: boolean;
  closeOnClickOutside?: boolean;
  backdropOpacity?: IBackdropOpacity;
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
  backdrop?: boolean;
}

export interface IModalProps extends IModalPropsOptional {
  children: JSX.Element | JSX.Element[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
}
