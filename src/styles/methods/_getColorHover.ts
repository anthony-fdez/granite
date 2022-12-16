import { IMethodProps } from "./../useStyles";
import { getColor } from "../helpers/getColor";

export const _getColorHover = ({
  styles,
  color,
  shade,
  variant,
  dark,
}: IMethodProps) => {
  if (variant === "subtle") {
    return getColor({ styles, color, shade: dark ? 8 : 2 });
  }

  const getShade = () => {
    if (shade <= 1) return 2;

    return shade - 1;
  };

  return getColor({
    styles,
    color,
    shade: getShade(),
  });
};
