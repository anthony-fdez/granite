import getButtonFontColor from "../helpers/getButtonFontColor";
import IMethodProps from "../interfaces/IMethodProps";

const GET_CONTRAST_FONT = ({ color, shade, variant, dark }: IMethodProps): string => {
  if (variant === "subtle") {
    return getButtonFontColor({ color, shade: dark ? 9 : 1 });
  }

  return getButtonFontColor({ color, shade });
};

export default GET_CONTRAST_FONT;
