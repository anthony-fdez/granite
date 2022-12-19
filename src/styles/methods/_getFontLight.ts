import { DEFAULT_COLORS } from "./../../constants/theme/colors";
import { IMethodProps } from "./../useStyles";

export const _getFontLight = ({ dark }: IMethodProps) => {
  return dark ? DEFAULT_COLORS.gray[3] : DEFAULT_COLORS.dark[6];
};
