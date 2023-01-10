import { SerializedStyles } from "@emotion/react";
import { IBackdropOpacity } from "../Backdrop/Backdrop.types";
import { ISpinnerProps } from "../Spinner/Spinner.types";

export interface ILoadingOverlayPropsOptional extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
  animationDuration?: number;
  backdrop?: boolean;
  backdropBlur?: number;
  backdropOpacity?: IBackdropOpacity;
  children?: JSX.Element | JSX.Element[];
  customCSS?: SerializedStyles;
  fullScreen?: boolean;
  spinnerProps?: ISpinnerProps;
  zIndex?: number;
}

export interface ILoadingOverlayProps extends ILoadingOverlayPropsOptional {
  show: boolean;
}
