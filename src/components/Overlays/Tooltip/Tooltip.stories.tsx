import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Button from "../../Buttons/Button";
import Tooltip from "./Tooltip";
import ThemeProvider from "../../Theming/ThemeProvider";

export default {
  title: "Components/Overlays/Tooltip",
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
