import { SizesType } from "./../../types/sizes";
export interface IModalProps {
  children: JSX.Element | JSX.Element[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
  closeButton?: JSX.Element;
  closeOnClickOutside?: boolean;
  backdropOpacity?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  animated?: boolean;
  animationDuration?: number;
  width?: number | string;
  height?: number | string;
  centered?: boolean;
  padding?: number;
  borderRadius?: SizesType;
  backdropBlur?: number;
}
