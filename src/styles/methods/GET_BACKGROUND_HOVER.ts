import { DEFAULT_COLORS } from "../../constants/theme/colors";
import IMethodProps from "../interfaces/IMethodProps";

const GET_BACKGROUND_HOVER = ({ dark }: IMethodProps): string => {
  if (dark) return DEFAULT_COLORS.dark[6];

  return DEFAULT_COLORS.gray[3];
};

export default GET_BACKGROUND_HOVER;
