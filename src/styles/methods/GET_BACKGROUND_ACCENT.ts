import { DEFAULT_COLORS } from "../../constants/theme/colors";
import IMethodProps from "../interfaces/IMethodProps";

const GET_BACKGROUND_ACCENT = ({ dark }: IMethodProps): string => {
  if (dark) return DEFAULT_COLORS.dark[7];

  return DEFAULT_COLORS.gray[2];
};

export default GET_BACKGROUND_ACCENT;
