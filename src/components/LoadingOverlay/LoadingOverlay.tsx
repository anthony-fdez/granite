/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";

import React from "react";
import Spinner from "../Spinner";
import Center from "../Center";
import getLoadingOverlayStyles from "./LoadingOverlay.styles";
import { ILoadingOverlayProps } from "./LoadingOverlay.types";
import useAppContext from "../../utils/hooks/useAppContext";
import { useLoadingOverlayDefaultProps } from "./LoadingOverlay.props";

const LoadingOverlay = (props: ILoadingOverlayProps): JSX.Element => {
  const { styles } = useAppContext();
  const {
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
    customCSS,
    ...args
  } = useLoadingOverlayDefaultProps({ props, styles });

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
          zIndex ? { zIndex } : { zIndex: "inherit" },
          animated && { transition: `${animationDuration}ms` },
          backdropBlur && { backdropFilter: `blur(${backdropBlur}px)` },
          show ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" },
          backdrop && { pointerEvents: "none" },
          customCSS,
        ]}
      />

      {children || (
        <Center
          css={[
            zIndex ? { zIndex: zIndex + 1 } : { zIndex: "inherit" },
            show ? stylesOpen : stylesClosed,
            animated && { transitionDuration: `${animationDuration}ms` },
          ]}
          {...args}
        >
          <Spinner {...spinnerProps} />
        </Center>
      )}
    </>
  );
};

export default LoadingOverlay;
