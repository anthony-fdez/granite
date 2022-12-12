/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";

import React, { useContext } from "react";
import { useStyles } from "../../../styles/useStyles";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import { ICloseButtonProps } from "./CloseButton.types";

const CloseButton = ({ size = 35, ...args }: ICloseButtonProps) => {
  const { styles } = useContext(StateContext);

  const { FONT, BG, BG_HOVER } = useStyles({ styles });

  const common: SerializedStyles = css([
    {
      color: FONT,
      transition: "100ms",
      backgroundColor: BG,
      border: 0,
      padding: 5,
      outline: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: BG_HOVER,
      },
      "&:active": {
        transform: "translateY(2px)",
        transition: "0ms",
      },
      ".close-button-icon": {
        width: "100%",
        height: "100%",
      },
    },
  ]);

  return (
    <button {...args} css={[common, size && { height: size, width: size }]}>
      <img
        className="close-button-icon"
        src={
          styles.theme === "light"
            ? require("./assets/close-light.svg")
            : require("./assets/close-dark.svg")
        }
      />
    </button>
  );
};

export default CloseButton;
