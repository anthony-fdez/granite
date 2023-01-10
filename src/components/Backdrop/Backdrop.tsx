/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";

import React from "react";
import { IBackdropProps } from "./Backdrop.types";
import { useBackdropDefaultProps } from "./Backdrop.props";
import useAppContext from "../../utils/hooks/useAppContext";

const Backdrop = (props: IBackdropProps): JSX.Element => {
  const { styles } = useAppContext();

  // eslint-disable-next-line operator-linebreak
  const { isOpen, backdropBlur, backdropOpacity, zIndex, animated, animationDuration, customCSS } =
    useBackdropDefaultProps({
      props,
      styles,
    });

  return (
    <div
      {...props}
      css={[
        {
          left: 0,
          top: 0,
          position: "fixed",
          height: "100vh",
          width: "100vw",
          backgroundColor: `rgb(0, 0, 0, ${backdropOpacity})`,
        },
        zIndex ? { zIndex } : { zIndex: "inherit" },
        animated && { transition: `${animationDuration}ms` },
        backdropBlur && { backdropFilter: `blur(${backdropBlur}px)` },
        isOpen ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" },
        customCSS,
      ]}
      role="presentation"
    />
  );
};

export default Backdrop;
