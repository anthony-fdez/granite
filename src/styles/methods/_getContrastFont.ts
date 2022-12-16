import { getButtonFontColor } from "./../helpers/getButtonFontColor";
import { IMethodProps } from "./../useStyles";

export const _getContrastFont = ({
  styles,
  color,
  shade,
  variant,
  dark,
}: IMethodProps) => {
  if (variant === "subtle") {
    return getButtonFontColor({ color, shade: dark ? 9 : 1 });
  }

  return getButtonFontColor({ color, shade });
};
