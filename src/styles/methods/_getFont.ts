import { DEFAULT_COLORS } from "./../../constants/theme/colors";
import { IMethodProps } from "./../useStyles";

export const _getFont = ({ dark }: IMethodProps) => {
  const test = "";
  return dark ? DEFAULT_COLORS.gray[0] : DEFAULT_COLORS.dark[9];
};
