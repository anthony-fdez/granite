import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Divider from "./Divider";
import Button from "../Button";

export default {
  title: "Components/Divider",
  component: Divider,
};

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Default = Template.bind({});

Default.args = {};
