import { ISpinnerProps } from "../../Feedback/Spinner/Spinner.types";

export interface ILoadingOverlayProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: JSX.Element | JSX.Element[];
  show: boolean;
  spinnerProps?: ISpinnerProps;
  backdrop?: boolean;
  zIndex?: number;
  backdropOpacity?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  backdropBlur?: number;
  animated?: boolean;
  animationDuration?: number;
  fullScreen?: boolean;
}
