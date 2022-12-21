import { DEFAULT_COLORS } from "../../constants/theme/colors";
import { IMethodProps } from "../useStyles";

const GET_FONT_LIGHT = ({ dark }: IMethodProps): string => {
  if (dark) return DEFAULT_COLORS.gray[3];

  return DEFAULT_COLORS.dark[6];
};

export default GET_FONT_LIGHT;
