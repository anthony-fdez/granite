/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";

import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import ThemeProvider from "../ThemeProvider";
import Skeleton from "./Skeleton";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
};

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <ThemeProvider>
    <div css={css({ width: "100%" })}>
      <Skeleton {...args} />
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  count: 10,
};
