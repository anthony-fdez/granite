import { IBackdropOpacity } from "./../Backdrop/Backdrop.types";
import { ISpinnerProps } from "../../Feedback/Spinner/Spinner.types";

export interface ILoadingOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: JSX.Element | JSX.Element[];
  show: boolean;
  spinnerProps?: ISpinnerProps;
  backdrop?: boolean;
  zIndex?: number;
  backdropOpacity?: IBackdropOpacity;
  backdropBlur?: number;
  animated?: boolean;
  animationDuration?: number;
  fullScreen?: boolean;
}
