import { IBackdropOpacity } from "../Backdrop/Backdrop.types";
import { ISizes } from "../../utils/types/sizes";

export interface IModalPropsOptional extends React.HtmlHTMLAttributes<HTMLDivElement> {
  animated?: boolean;
  animationDuration?: number;
  backdrop?: boolean;
  backdropBlur?: number;
  backdropOpacity?: IBackdropOpacity;
  border?: boolean;
  borderColor?: string;
  borderRadius?: ISizes;
  borderWidth?: number;
  centered?: boolean;
  closeButton?: boolean;
  closeOnClickOutside?: boolean;
  height?: number | string;
  padding?: number;
  unmount?: boolean;
  width?: number | string;
  zIndex?: number;
}

export interface IModalProps extends IModalPropsOptional {
  children: JSX.Element | JSX.Element[];
  isOpen: boolean;
  onClose: () => void;
  title: string;
}
