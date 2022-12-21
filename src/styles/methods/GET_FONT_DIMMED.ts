import { DEFAULT_COLORS } from "../../constants/theme/colors";
import IMethodProps from "../interfaces/IMethodProps";

const GET_FONT_DIMMED = ({ dark }: IMethodProps): string => {
  if (dark) return DEFAULT_COLORS.gray[3];

  return DEFAULT_COLORS.dark[6];
};

export default GET_FONT_DIMMED;
