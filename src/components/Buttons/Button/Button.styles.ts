import { css, SerializedStyles } from "@emotion/react";
import { IStyles } from "./../../Theming/ThemeProvider/Interfaces/IStyles";
import { GetColorProps } from "../../../styles/useStyles";
import { IVariants } from "../../../utils/types/variants";
import { getVariantStyles } from "../../Theming/ThemeProvider/getValues/getVariantStyles";
import IUseStyles from "../../../styles/interfaces/IUseStyles";

interface Props {
  styles: IStyles;
  variant?: IVariants;
  disabled?: boolean;
  getColor: (props: GetColorProps) => IUseStyles;
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
      cursor: "pointer",
      ".button-icon-container-left": {
        marginRight: 10,
      },
      ".button-icon-container-right": {
        marginLeft: 10,
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
      filter: "grayscale(1)",
      pointerEvents: "none",
    },
  ]);

  return common;
};

export default getButtonStyles;
