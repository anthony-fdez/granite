/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";

import React from "react";
import { X } from "react-feather";
import useStyles from "../../styles/useStyles";
import { ICloseButtonProps } from "./CloseButton.types";
import { useCloseButtonDefaultProps } from "./CloseButton.props";
import useAppContext from "../../utils/hooks/useAppContext";

const CloseButton = (props: ICloseButtonProps): JSX.Element => {
  const { styles } = useAppContext();
  const { getColor } = useStyles({ styles });

  const { size, customCSS } = useCloseButtonDefaultProps({ styles, props });

  const common: SerializedStyles = css([
    {
      color: getColor({}).font,
      transition: "100ms",
      backgroundColor: "transparent",
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
    customCSS,
  ]);

  return (
    <button aria-label="Close" type="button" {...props} css={[common, size && { height: size, width: size }]}>
      <X data-testid="CloseButton/close-icon" />
    </button>
  );
};

export default CloseButton;
