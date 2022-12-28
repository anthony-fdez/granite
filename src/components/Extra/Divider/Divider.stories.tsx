import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Divider from "./Divider";
import ThemeProvider from "../../Theming/ThemeProvider";

export default {
  title: "Components/Extra/Divider",
  component: Divider,
};

const Template: ComponentStory<typeof Divider> = (args) => (
  <ThemeProvider>
    <Divider {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
export const WithLabel = Template.bind({});
export const LabelLeft = Template.bind({});
export const LabelRight = Template.bind({});
export const ThickDivider = Template.bind({});

Default.args = {};
WithLabel.args = { label: "It has a label" };
LabelLeft.args = { label: "It has a label", labelPosition: "left" };
LabelRight.args = { label: "It has a label", labelPosition: "right" };
ThickDivider.args = { label: "Thick red divider", width: 20, color: "red" };
