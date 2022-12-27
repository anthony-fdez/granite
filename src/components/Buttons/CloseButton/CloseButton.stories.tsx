import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import CloseButton from "./CloseButton";

export default {
  title: "Components/Buttons/CloseButton",
  component: CloseButton,
};

const Template: ComponentStory<typeof CloseButton> = (args) => <CloseButton {...args} />;

export const Default = Template.bind({});

Default.args = {};
