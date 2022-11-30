import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Button from "../../Buttons/Button";
import Tooltip from "./Tooltip";

export default {
  title: "Components/Overlays/Tooltip",
  component: Tooltip,
};

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const Default = Template.bind({});

Default.args = {
  label: "Tooltip",
  children: <Button>Hover over me</Button>,
};
