import { DEFAULT_COLORS } from "../../constants/theme/colors";
import { IMethodProps } from "../useStyles";

const GET_BACKGROUND = ({ dark }: IMethodProps): string => {
  if (dark) return DEFAULT_COLORS.dark[9];

  return DEFAULT_COLORS.gray[0];
};

export default GET_BACKGROUND;
