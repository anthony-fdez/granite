import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Box from "./Box";
import { ThemeProvider } from "@emotion/react";

export default {
  title: "Components/Box",
  component: Box,
};

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <p>element 1</p>
      <p>element 2</p>
      <p>element 3</p>
    </>
  ),
};
