import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Button from "../Button";
import Tooltip from "./Tooltip";
import ThemeProvider from "../ThemeProvider";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
};

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <ThemeProvider>
    <Tooltip {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  label: "Tooltip",
  children: <Button>Hover over me</Button>,
};
