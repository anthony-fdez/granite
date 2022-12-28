import React from "react";
import { ComponentStory } from "@storybook/react";
import Alert from "./Alert";
import ThemeProvider from "../../Theming/ThemeProvider";

export default {
  title: "Components/Feedback/Alert",
  component: Alert,
};

const Template: ComponentStory<typeof Alert> = (args) => (
  <ThemeProvider>
    <Alert {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {};
