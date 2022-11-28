import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Button from "./Button";
import useTheme from "../../hooks/useTheme";

export default {
  title: "Components/Buttons/Button",
  component: Button,
};

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
  color: "red",
};
