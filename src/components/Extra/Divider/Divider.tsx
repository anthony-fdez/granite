/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext } from "react";
import { colors } from "../../../constants/theme/colors";
import Flex from "../../Layout/Flex";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import { IDividerProps } from "./Divider.types";

const Divider = ({
  label,
  labelPadding = 15,
  labelPosition = "center",
  width = 1,
  variant = "solid",
  marginTop = 20,
  marginBottom = 20,
  color,
  ...args
}: IDividerProps) => {
  const { styles } = useContext(StateContext);

  const BORDER_COLOR = colors.common[styles.theme || "light"].border;
  const FONT_COLOR = colors.common[styles.theme || "light"].font;

  const lineStyles = css([
    {
      border: `${width}px`,
      borderStyle: variant,
      borderColor: color ?? BORDER_COLOR,
      width: "100%",
    },
  ]);

  return (
    <Flex {...args} css={{ marginTop, marginBottom }}>
      {labelPosition !== "left" ? <div css={lineStyles}></div> : <></>}
      {label ? (
        <span
          css={{
            marginLeft: labelPadding,
            marginRight: labelPadding,
            whiteSpace: "nowrap",
            fontSize: 14,
            color: color ?? FONT_COLOR,
          }}
        >
          {label}
        </span>
      ) : (
        <></>
      )}
      {labelPosition !== "right" ? <div css={lineStyles}></div> : <></>}
    </Flex>
  );
};

export default Divider;
