import { getBorderRadius } from "./../../ThemeProvider/getValues/getBorderRadius";
import { IButtonProps } from "./../../../../dist/cjs/components/Button/IButtonProps.d";
import { IStyles } from "./../../ThemeProvider/Interfaces/IStyles";
import { css } from "@emotion/react";
import { VariantsType } from "../../../types/variants";
import variants from "../../ThemeProvider/getValues/variants";

interface Props {
  styles: IStyles;
  variant: VariantsType;
}

export const getButtonStyles = ({ styles, variant }: Props) => {
  const light = css({
    backgroundColor: "white",
  });

  const filled = css({
    backgroundColor: "blue",
  });

  const outlined = css({
    border: 1,
    borderColor: "blue",
    borderStyle: "solid",
    backgroundColor: "white",
  });

  const subtle = css({
    backgroundColor: "pink",
  });

  const common = css([
    {
      color: "white",
      backgroundColor: styles.primaryColor,
      border: 0,
      padding: 10,
      outline: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: getBorderRadius({}),
    },
    {
      ...variants.getStyles({ light, filled, subtle, outlined, variant }),
    },
  ]);

  return common;
};
