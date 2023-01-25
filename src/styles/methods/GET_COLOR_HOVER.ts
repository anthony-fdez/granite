import getColor from "../helpers/getColor";
import IMethodProps from "../interfaces/IMethodProps";

const GET_COLOR_HOVER = ({ styles, color, shade, variant, dark }: IMethodProps): string => {
  if (variant === "subtle") {
    return getColor({ color, shade: dark ? 8 : 2, styles });
  }

  const getShade = (): number => {
    if (shade <= 1) return 2;

    return shade - 1;
  };

  return getColor({
    color,
    shade: getShade(),
    styles,
  });
};

export default GET_COLOR_HOVER;
