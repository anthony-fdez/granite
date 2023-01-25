import getColor from "../helpers/getColor";
import IMethodProps from "../interfaces/IMethodProps";

const GET_COLOR = ({ styles, color, shade, variant, dark }: IMethodProps): string => {
  if (variant === "subtle") {
    return getColor({ color, shade: dark ? 9 : 1, styles });
  }

  return getColor({ color, shade, styles });
};

export default GET_COLOR;
