import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import TextInput from "./TextInput";

export default {
  title: "Components/Inputs/TextInput",
  component: TextInput,
};

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});

Default.args = {};
