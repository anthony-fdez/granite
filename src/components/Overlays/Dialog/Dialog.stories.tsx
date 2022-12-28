import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Dialog from "./Dialog";
import ThemeProvider from "../../Theming/ThemeProvider";

export default {
  title: "Components/Overlays/Dialog",
  component: Dialog,
};

const Template: ComponentStory<typeof Dialog> = (args) => (
  <ThemeProvider>
    <Dialog {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  title: "Subscribe to the newsletter",
  children: (
    <div>
      <p>This is the dialog</p>
    </div>
  ),
};
