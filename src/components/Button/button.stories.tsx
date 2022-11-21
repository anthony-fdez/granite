import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
  width: 200,
  color: "red",
};
