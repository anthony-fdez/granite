import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Button from "../../Buttons/Button";
import Dialog from "./Dialog";

export default {
  title: "Components/Overlays/Dialog",
  component: Dialog,
};

let isOpen = false;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});

Default.args = {};
