import { SerializedStyles } from "@emotion/react";
import { ISizes } from "../../utils/types/sizes";
import { IBackdropOpacity } from "../Backdrop/Backdrop.types";

export type IDrawerPositions = "top" | "bottom" | "left" | "right";

export interface IDrawerPropsOptional extends React.HtmlHTMLAttributes<HTMLDivElement> {
  animated?: boolean;
  animationDuration?: number;
  backdrop?: boolean;
  backdropBlur?: number;
  backdropOpacity?: IBackdropOpacity;
  border?: boolean;
  borderColor?: string;
  borderRadius?: ISizes;
  borderWidth?: number;
  closeButton?: boolean;
  closeOnClickOutside?: boolean;
  customCSS?: SerializedStyles;
  height?: number | string;
  padding?: number;
  position?: IDrawerPositions;
  unmount?: boolean;
  width?: number | string;
  zIndex?: number;
}

export interface IDrawerProps extends IDrawerPropsOptional {
  children: JSX.Element | JSX.Element[];
  isOpen: boolean;
  onClose: () => void;
  title: string;
}
