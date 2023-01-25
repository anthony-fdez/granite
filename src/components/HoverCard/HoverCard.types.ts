import { SerializedStyles } from "@emotion/react";
import { IPopupPositions } from "./../../utils/types/IPopupPositions";

export interface IHoverCardPropsOptional extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
  animationDuration?: number;
  closeDelay?: number;
  customCSS?: SerializedStyles;
  disabled?: boolean;
  height?: number;
  isOpen?: boolean;
  openDelay?: number;
  position?: IPopupPositions;
  unmount?: true;
  width?: number;
  zIndex?: number;
}

export interface IHoverCardProps extends IHoverCardPropsOptional {
  card: JSX.Element;
  children: JSX.Element | JSX.Element[];
}
