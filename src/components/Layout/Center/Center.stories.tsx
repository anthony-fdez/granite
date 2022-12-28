import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";

import Center from "./Center";
import Button from "../../Buttons/Button";
import ThemeProvider from "../../Theming/ThemeProvider";

export default {
  title: "Components/Layout/Center",
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
