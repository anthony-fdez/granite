import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Center from "./Center";
import Button from "../Button";
import ThemeProvider from "../ThemeProvider";

export default {
  title: "Components/Center",
  component: Center,
};

const Template: ComponentStory<typeof Center> = (args) => (
  <ThemeProvider>
    <div style={{ backgroundColor: "gray" }}>
      <Center {...args} />
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  children: <Button>This will always be centered</Button>,
};
