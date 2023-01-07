import { IBackdropOpacity } from "../Backdrop/Backdrop.types";
import { ISpinnerProps } from "../Spinner/Spinner.types";

export interface ILoadingOverlayPropsOptional extends React.HTMLAttributes<HTMLDivElement> {
  spinnerProps?: ISpinnerProps;
  backdrop?: boolean;
  zIndex?: number;
  backdropOpacity?: IBackdropOpacity;
  backdropBlur?: number;
  animated?: boolean;
  animationDuration?: number;
  fullScreen?: boolean;
  children?: JSX.Element | JSX.Element[];
}

export interface ILoadingOverlayProps extends ILoadingOverlayPropsOptional {
  show: boolean;
}
