import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import ThemeProvider from "../ThemeProvider";
import Drawer from "./Drawer";

export default {
  title: "Components/Drawer",
  component: Drawer,
};

const isOpen = false;

const Template: ComponentStory<typeof Drawer> = (args) => (
  <ThemeProvider>
    <Drawer {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <div>
      <h1>drawer baby</h1>
    </div>
  ),
  closeButton: true,
  title: "This is the drawer title",
  isOpen,
};
