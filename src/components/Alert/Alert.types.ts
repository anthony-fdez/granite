import { IColors } from "../../constants/theme/colors";
import { ISizes } from "../../utils/types/sizes";

export type AlertVariantTypes = "filled" | "outlined" | "subtle";

export interface IAlertProps {
  borderRadius: ISizes;
  children: JSX.Element | JSX.Element[];
  closeButton?: boolean;
  color?: IColors;
  icon?: JSX.Element;
  onClose?: () => void;
  show?: boolean;
  title: string;
  variant?: AlertVariantTypes;
}
