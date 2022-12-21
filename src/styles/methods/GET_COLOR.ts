import { IMethodProps } from "../useStyles";
import getColor from "../helpers/getColor";

const GET_COLOR = ({ styles, color, shade, variant, dark }: IMethodProps): string => {
  if (variant === "subtle") {
    return getColor({ styles, color, shade: dark ? 9 : 1 });
  }

  return getColor({ styles, color, shade });
};

export default GET_COLOR;
