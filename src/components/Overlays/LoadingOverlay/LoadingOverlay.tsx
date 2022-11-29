/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext } from "react";
import Spinner from "../../Feedback/Spinner";
import Center from "../../Layout/Center";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import { getLoadingOverlayStyles } from "./LoadingOverlay.styles";
import { ILoadingOverlayProps } from "./LoadingOverlay.types";

const LoadingOverlay = ({
  show,
  children,
  spinnerProps = { size: 30 },
  backdrop = true,
  backdropBlur = 5,
  backdropOpacity = 0.6,
  zIndex,
  animated = true,
  animationDuration = 200,
  fullScreen = false,
  ...args
}: ILoadingOverlayProps) => {
  const { styles } = useContext(StateContext);

  const { stylesClosed, stylesOpen } = getLoadingOverlayStyles({
    fullScreen,
  });

  return (
    <>
      <div
        css={[
          {
            left: 0,
            top: 0,
            position: fullScreen ? "fixed" : "absolute",
            height: fullScreen ? "100vh" : "100%",
            width: fullScreen ? "100vw" : "100%",
            backgroundColor: `rgb(0, 0, 0, ${backdrop ? backdropOpacity : 0})`,
          },
          zIndex ? { zIndex: zIndex } : { zIndex: "inherit" },
          animated && { transition: `${animationDuration}ms` },
          backdropBlur && { backdropFilter: `blur(${backdropBlur}px)` },
          show ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" },
          backdrop && { pointerEvents: "none" },
        ]}
      />

      <Center
        css={[
          zIndex ? { zIndex: zIndex + 1 } : { zIndex: "inherit" },
          show ? stylesOpen : stylesClosed,
          animated && { transitionDuration: `${animationDuration}ms` },
        ]}
        {...args}
      >
        {children ? children : <Spinner {...spinnerProps} />}
      </Center>
    </>
  );
};

export default LoadingOverlay;
