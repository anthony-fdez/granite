import { css, SerializedStyles } from "@emotion/react";
import { IStyles } from "../ThemeProvider/Interfaces/IStyles";
import { GetColorProps } from "../../styles/useStyles";
import { IVariants } from "../../utils/types/IVariants";
import { getVariantStyles } from "../../styles/helpers/getVariantStyles";
import IUseStyles from "../../styles/interfaces/IUseStyles";

interface Props {
  disabled?: boolean;
  getColor: (props: GetColorProps) => IUseStyles;
  styles: IStyles;
  variant?: IVariants;
}

const getButtonStyles = ({ styles, variant, disabled, getColor }: Props): SerializedStyles => {
  const filled: SerializedStyles = css({
    backgroundColor: getColor({}).color,
  });

  const outlined: SerializedStyles = css({
    border: 1,
    borderColor: getColor({}).border,
    borderStyle: "solid",
    backgroundColor: "transparent",
    color: getColor({}).color,

    "&:hover": {
      color: getColor({}).fontContrast,
    },
    "&:focus": {
      color: getColor({}).fontContrast,
    },
  });

  const subtle: SerializedStyles = css({
    backgroundColor: getColor({ variant: "subtle" }).color,
    color: styles.theme === "dark" ? getColor({}).font : getColor({}).color,
    fontWeight: "600",
  });

  const common: SerializedStyles = css([
    {
      color: getColor({ variant }).fontContrast,
      backgroundColor: getColor({}).color,
      border: 0,
      padding: 10,
      outline: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "auto",
      cursor: "pointer",
      ".Granite-Button-icon-left": {
        marginRight: 10,
      },
      ".Granite-Button-icon-right": {
        marginLeft: 10,
      },
      ".Granite-button-spinner": {
        marginLeft: 5,
      },
      "&:hover": {
        backgroundColor: getColor({ variant }).colorHover,
        transition: "100ms",
      },
      "&:active": {
        transform: "translateY(2px)",
        transition: "0ms",
      },
      "&:focus": {
        backgroundColor: getColor({ variant }).colorHover,
      },
    },
    {
      ...getVariantStyles({ filled, subtle, outlined, variant }),
    },
    disabled && {
      filter: "grayscale(0.5)",
      pointerEvents: "none",
    },
  ]);

  return common;
};

export default getButtonStyles;
