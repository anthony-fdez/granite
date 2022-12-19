import { DEFAULT_COLORS } from "./../../constants/theme/colors";
import { IMethodProps } from "./../useStyles";

export const _getBackgroundAccent = ({ dark }: IMethodProps) => {
  return dark ? DEFAULT_COLORS.dark[7] : DEFAULT_COLORS.gray[2];
};
