import { DEFAULT_COLORS, IColors } from "../../constants/theme/colors";

interface Props {
  color?: IColors;
}

function getContrastYIQ(hexcolor: string) {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === "#") {
    hexcolor = hexcolor.slice(1);
  }

  // If a three-character hexcode, make six-character
  if (hexcolor.length === 3) {
    hexcolor = hexcolor
      .split("")
      .map(function (hex) {
        return hex + hex;
      })
      .join("");
  }

  // Convert to RGB value
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);

  // Get YIQ ratio
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? DEFAULT_COLORS.gray[9] : DEFAULT_COLORS.gray[1];
}

export const getButtonFontColor = ({ color }: Props) => {
  return getContrastYIQ(DEFAULT_COLORS[color ?? "blue"][6]);
};
