import { DEFAULT_COLORS } from "../../constants/theme/colors";
import IMethodProps from "../interfaces/IMethodProps";

const GET_FONT = ({ dark }: IMethodProps): string => {
  if (dark) return DEFAULT_COLORS.gray[0];

  return DEFAULT_COLORS.dark[9];
};

export default GET_FONT;
