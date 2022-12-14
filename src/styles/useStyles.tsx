import {
  IStyles,
  numberRange,
} from "../components/Theming/ThemeProvider/Interfaces/IStyles";
import { DEFAULT_COLORS, IColors } from "../constants/theme/colors";
import { IVariants } from "../types/variants";
import { getButtonFontColor } from "./helpers/getButtonFontColor";
import { _getColor } from "./helpers/getColor";

interface Props {
  styles: IStyles;
  color?: IColors;
}

interface GetColorProps {
  color?: IColors;
  shade?: numberRange;
  variant?: IVariants;
}

export const useStyles = ({ styles }: Props) => {
  return {
    getColor: ({ color, shade, variant }: GetColorProps) => {
      const dark = styles.theme === "dark";

      return {
        color: () => {
          if (variant === "subtle") {
            return _getColor({ styles, color, shade: dark ? 9 : 1 });
          }

          return _getColor({ styles, color });
        },
        colorHover: () => {
          if (variant === "subtle") {
            return _getColor({ styles, color, shade: dark ? 8 : 2 });
          }

          return _getColor({ styles, color, shade: 7 });
        },
        font: () => {
          if (variant === "subtle")
            return getButtonFontColor({ color, shade: dark ? 9 : 1 });

          return getButtonFontColor({ color, shade });
        },
        border: () => {
          return dark ? DEFAULT_COLORS.dark[4] : DEFAULT_COLORS.gray[3];
        },
        background: () => {
          return dark ? DEFAULT_COLORS.dark[9] : DEFAULT_COLORS.gray[0];
        },
        backgroundHover: () => {
          return dark ? DEFAULT_COLORS.dark[4] : DEFAULT_COLORS.gray[4];
        },
      };
    },
  };
};
