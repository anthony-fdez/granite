import { SerializedStyles } from "@emotion/react";

export type IBackdropOpacity = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;

export interface IBackdropProps {
  animated?: boolean;
  animationDuration?: number;
  backdropBlur?: number;
  backdropOpacity?: IBackdropOpacity;
  customCSS?: SerializedStyles;
  isOpen?: boolean;
  zIndex?: number;
}
