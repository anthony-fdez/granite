import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import CloseButton from "./CloseButton";
import ThemeProvider from "../ThemeProvider";

export default {
  title: "Components/Buttons/CloseButton",
  component: CloseButton,
};

const Template: ComponentStory<typeof CloseButton> = (args) => (
  <ThemeProvider>
    <CloseButton {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {};
