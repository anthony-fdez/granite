import { ISizes } from "./../../../types/sizes";
import { IColors } from "./../../../constants/theme/colors";
export type AlertVariantTypes = "filled" | "outlined" | "subtle";

export interface IAlertProps {
  children: JSX.Element | JSX.Element[];
  color?: IColors;
  icon?: JSX.Element;
  title: string;
  variant?: AlertVariantTypes;
  show?: boolean;
  onClose?: () => void;
  closeButton?: boolean;
  borderRadius: ISizes;
}
