import { ColorsType } from "./../../constants/colors";
import { VariantsType } from "./../../../../types/variants";
import { colors } from "./../../constants/colors";

export interface Props {
  variant: VariantsType;
  color: ColorsType;
}

const getVariantColors = ({
  variant,
  color,
}: Props): {
  backgroundColor: string;
  backgroundColorHover: string;
  color: string;
  borderColor: string;
} => {
  const DEFAULT = {
    backgroundColor: colors[color][6],
    backgroundColorHover: colors[color][7],
    color: "white",
    borderColor: "transparent",
  };

  if (variant === "filled") {
    return DEFAULT;
  } else if (variant === "light") {
    return {
      backgroundColor: colors[color][0],
      backgroundColorHover: colors[color][3],
      color: "white",
      borderColor: "transparent",
    };
  } else if (variant === "outlined") {
    return {
      backgroundColor: colors[color][1],
      backgroundColorHover: colors[color][3],
      color: "white",
      borderColor: colors[color][6],
    };
  } else if (variant === "subtle") {
    return {
      backgroundColor: "rgb(0,0,0,0)",
      backgroundColorHover: colors[color][3],
      color: "white",
      borderColor: "transparent",
    };
  }

  return DEFAULT;
};

export default getVariantColors;
