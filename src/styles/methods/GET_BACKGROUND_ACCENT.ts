import { DEFAULT_COLORS } from "../../constants/theme/colors";
import errorWrapper from "../helpers/errorWrapper";
import IMethodProps from "../interfaces/IMethodProps";

const GET_BACKGROUND_ACCENT = (props: IMethodProps): string => {
  return errorWrapper({
    props,
    callback: (p) => {
      const { dark, styles } = p;
      const colors = styles.colors ?? DEFAULT_COLORS;

      if (dark) return colors.dark[7];

      return colors.gray[2];
    },
  });
};

export default GET_BACKGROUND_ACCENT;
