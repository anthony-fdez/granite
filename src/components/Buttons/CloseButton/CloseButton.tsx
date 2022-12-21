/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";

import React, { useContext } from "react";
import useStyles from "../../../styles/useStyles";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import { ICloseButtonProps } from "./CloseButton.types";
import { useCloseButtonDefaultProps } from "./CloseButton.props";

const CloseButton = (props: ICloseButtonProps): JSX.Element => {
  const { styles } = useContext(StateContext);
  const { getColor } = useStyles({ styles });

  const { size } = useCloseButtonDefaultProps({ styles, props });

  const common: SerializedStyles = css([
    {
      color: getColor({}).font,
      transition: "100ms",
      backgroundColor: getColor({}).background,
      border: 0,
      padding: 5,
      outline: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: getColor({}).backgroundHover,
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
    <button type="button" {...props} css={[common, size && { height: size, width: size }]}>
      <img
        alt="Close button"
        className="close-button-icon"
        src={styles.theme === "light" ? require("./assets/close-light.svg") : require("./assets/close-dark.svg")}
      />
    </button>
  );
};

export default CloseButton;
