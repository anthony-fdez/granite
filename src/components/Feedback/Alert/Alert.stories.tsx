import React from "react";
import { ComponentStory } from "@storybook/react";
import Alert from "./Alert";

export default {
  title: "Components/Feedback/Alert",
  component: Alert,
};

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});

Default.args = {};
