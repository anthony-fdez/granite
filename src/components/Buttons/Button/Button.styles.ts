import { IColors } from "./../../../constants/theme/colors";
import { useStyles } from "../../../styles/useStyles";
import { IVariants } from "./../../../types/variants";
import { getVariantStyles } from "../../Theming/ThemeProvider/getValues/getVariantStyles";
import { IStyles } from "../../Theming/ThemeProvider/Interfaces/IStyles";
import { css, SerializedStyles } from "@emotion/react";

interface Props {
  styles: IStyles;
  variant: IVariants;
  color?: IColors;
  disabled?: boolean;
}

export const getButtonStyles = ({
  styles,
  variant,
  color,
  disabled,
}: Props) => {
  if (!styles.primaryColor) return null;

  const { COLOR, COLOR_HOVER, BUTTON_FONT } = useStyles({
    styles,
    color,
  });

  const filled: SerializedStyles = css({
    backgroundColor: COLOR,
  });

  const outlined: SerializedStyles = css({
    border: 1,
    borderColor: COLOR,
    borderStyle: "solid",
    backgroundColor: "transparent",
    color: COLOR,

    "&:hover": {
      color: BUTTON_FONT,
    },
    "&:focus": {
      color: BUTTON_FONT,
    },
  });

  const subtle: SerializedStyles = css({
    backgroundColor: COLOR,
    color: BUTTON_FONT,
    fontWeight: "600",
  });

  const common: SerializedStyles = css([
    {
      color: BUTTON_FONT,
      transition: "100ms",
      backgroundColor: COLOR,
      border: 0,
      padding: 10,
      outline: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      ".button-icon-container-left": {
        marginRight: 10,
      },
      ".button-icon-container-right": {
        marginLeft: 10,
      },
      "&:hover": {
        backgroundColor: COLOR_HOVER,
      },
      "&:active": {
        transform: "translateY(2px)",
        transition: "0ms",
      },
      "&:focus": {
        backgroundColor: COLOR_HOVER,
      },
    },
    {
      ...getVariantStyles({ filled, subtle, outlined, variant }),
    },
    disabled && {
      filter: "grayscale(1)",
      pointerEvents: "none",
    },
  ]);

  return common;
};
