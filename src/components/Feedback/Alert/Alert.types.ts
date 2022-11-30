import { SizesType } from "./../../../types/sizes";
import { AvailableColorsType } from "./../../../../dist/cjs/constants/theme/colors.d";

export type AlertVariantTypes = "filled" | "outlined" | "subtle";

export interface IAlertProps {
  children: JSX.Element | JSX.Element[];
  color?: AvailableColorsType;
  icon?: JSX.Element;
  title: string;
  variant?: AlertVariantTypes;
  show?: boolean;
  onClose?: () => void;
  closeButton?: boolean;
  borderRadius: SizesType;
}
