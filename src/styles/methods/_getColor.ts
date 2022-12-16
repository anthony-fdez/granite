import { IMethodProps } from "./../useStyles";
import { getColor } from "../helpers/getColor";

export const _getColor = ({
  styles,
  color,
  shade,
  variant,
  dark,
}: IMethodProps) => {
  if (variant === "subtle") {
    return getColor({ styles, color, shade: dark ? 9 : 1 });
  }

  return getColor({ styles, color, shade });
};
