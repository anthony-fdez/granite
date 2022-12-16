import { DEFAULT_COLORS } from "./../../constants/theme/colors";
import { IMethodProps } from "./../useStyles";

export const _getBackgroundHover = ({ dark }: IMethodProps) => {
  return dark ? DEFAULT_COLORS.dark[6] : DEFAULT_COLORS.gray[4];
};
