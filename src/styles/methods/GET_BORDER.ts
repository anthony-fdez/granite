import { DEFAULT_COLORS } from "../../constants/theme/colors";
import { IMethodProps } from "../useStyles";

const GET_BORDER = ({ dark }: IMethodProps): string => {
  if (dark) return DEFAULT_COLORS.dark[4];

  return DEFAULT_COLORS.gray[3];
};

export default GET_BORDER;
