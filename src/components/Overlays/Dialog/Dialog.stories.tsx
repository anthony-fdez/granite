import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Button from "../../Buttons/Button";
import Dialog from "./Dialog";

export default {
  title: "Components/Overlays/Dialog",
  component: Dialog,
};

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Subscribe to the newsletter",
  children: (
    <div>
      <p>This is the dialog</p>
    </div>
  ),
};
