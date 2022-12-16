import { DEFAULT_COLORS } from "./../../constants/theme/colors";
import { IMethodProps } from "./../useStyles";

export const _getBackground = ({ dark }: IMethodProps) => {
  return dark ? DEFAULT_COLORS.dark[9] : DEFAULT_COLORS.gray[2];
};
