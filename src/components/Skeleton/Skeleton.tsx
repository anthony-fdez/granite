/**
 * A lot of inspiration for this component came from here: https://github.com/dvtng/react-loading-skeleton
 *
 * It is a pretty cool library and I honestly recommend it over this, i'm just doing this for fun!
 */

/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, keyframes } from "@emotion/react";

import React from "react";
import { ISkeletonPropsOptional } from "./Skeleton.types";
import useAppContext from "../../utils/hooks/useAppContext";
import { useSkeletonDefaultProps } from "./Skeleton.props";
import useStyles from "../../styles/useStyles";
import getBorderRadius from "../../styles/helpers/getBorderRadius";

const animation = keyframes`
  100% {
    transform: translateX(100%)
  }
`;

const Skeleton = (props: ISkeletonPropsOptional): JSX.Element => {
  const { styles } = useAppContext();
  const { getColor } = useStyles({ styles });

  const {
    marginBottom,
    circle,
    height,
    borderRadius,
    width,
    customCSS,
    highlightColor,
    baseColor,
    count,
    animationSpeed,
  } = useSkeletonDefaultProps({ props, styles });

  const BASE_COLOR = baseColor ?? getColor({}).backgroundHover;
  const HIGH_LIGHT_COLOR = highlightColor ?? getColor({}).background;

  return (
    <div>
      {[...Array(count)].map((_element, index) => (
        <div
          aria-label="Loading"
          css={[
            {
              position: "relative",
              backgroundColor: BASE_COLOR,
              overflow: "hidden",
              zIndex: 1,
              lineHeight: 1,
              ":after": {
                backgroundColor: HIGH_LIGHT_COLOR,
                content: "' '",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundImage: `linear-gradient(90deg, ${BASE_COLOR}, ${HIGH_LIGHT_COLOR}, ${BASE_COLOR})`,
                transform: "translateX(-100%)",
                animation: `${animation} ${animationSpeed}ms ease infinite`,
              },
            },
            height && {
              minHeight: height,
              height,
            },
            borderRadius && { borderRadius: getBorderRadius({ size: borderRadius }) },
            count && marginBottom && index !== count - 1 && { marginBottom },
            width && { width },
            circle && { width: height, borderRadius: "50%" },
            customCSS,
          ]}
          data-testid="Skeleton/skeleton"
          role="progressbar"
        />
      ))}
    </div>
  );
};

export default Skeleton;
