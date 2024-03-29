import { DEFAULT_COLORS } from "../../constants/theme/colors";
import errorWrapper from "../helpers/errorWrapper";
import IMethodProps from "../interfaces/IMethodProps";

const GET_FONT_DIMMED = (props: IMethodProps): string => {
  return errorWrapper({
    callback: (p) => {
      const { dark, styles } = p;
      const colors = styles.colors ?? DEFAULT_COLORS;

      if (dark) return colors.gray?.[3];

      return colors.dark?.[6];
    },
    props,
  });
};

export default GET_FONT_DIMMED;
