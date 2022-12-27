import { DEFAULT_COLORS } from "../../constants/theme/colors";
import errorWrapper from "../helpers/errorWrapper";
import IMethodProps from "../interfaces/IMethodProps";

const GET_BACKGROUND = (props: IMethodProps): string => {
  return errorWrapper({
    props,
    callback: (p) => {
      const { dark, styles } = p;
      const colors = styles.colors ?? DEFAULT_COLORS;

      if (dark) return colors.dark[9];

      return colors.gray[0];
    },
  });
};

export default GET_BACKGROUND;
