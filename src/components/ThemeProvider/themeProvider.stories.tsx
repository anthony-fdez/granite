import React from "react";
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";
import ThemeProvider from "./components/ThemeProvider";
import Button from "../Button";

export default {
  title: "Components/ThemeProvider",
  component: ThemeProvider,
};

const Template: ComponentStory<typeof ThemeProvider> = (args) => {
  return (
    <ThemeProvider {...args}>
      <Button label="Button" />
    </ThemeProvider>
  );
};

export const Dark = Template.bind({});

Dark.args = { theme: "dark" };

export const Light = Template.bind({});

Light.args = { theme: "light" };
