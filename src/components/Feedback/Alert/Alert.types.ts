import { IColors } from "../../../constants/theme/colors";
import { ISizes } from "../../../utils/types/sizes";

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
