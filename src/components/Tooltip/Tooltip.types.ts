import { SerializedStyles } from "@emotion/react";
import { IPopupPositions } from "./../../utils/types/IPopupPositions";

export interface ITooltipPropsOptional extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
  animationDuration?: number;
  closeDelay?: number;
  customCSS?: SerializedStyles;
  isOpen?: boolean;
  openDelay?: number;
  position?: IPopupPositions;
  zIndex?: number;
}

export interface ITooltipProps extends ITooltipPropsOptional {
  children: JSX.Element | JSX.Element[];
  tooltip: string;
}
