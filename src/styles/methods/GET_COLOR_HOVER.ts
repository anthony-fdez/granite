import { IMethodProps } from "../useStyles";
import getColor from "../helpers/getColor";

const GET_COLOR_HOVER = ({ styles, color, shade, variant, dark }: IMethodProps): string => {
  if (variant === "subtle") {
    return getColor({ styles, color, shade: dark ? 8 : 2 });
  }

  const getShade = (): number => {
    if (shade <= 1) return 2;

    return shade - 1;
  };

  return getColor({
    styles,
    color,
    shade: getShade(),
  });
};

export default GET_COLOR_HOVER;
