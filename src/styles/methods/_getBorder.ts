import { DEFAULT_COLORS } from "./../../constants/theme/colors";
import { IMethodProps } from "./../useStyles";

export const _getBorder = ({ dark }: IMethodProps) => {
  return dark ? DEFAULT_COLORS.dark[4] : DEFAULT_COLORS.gray[5];
};
